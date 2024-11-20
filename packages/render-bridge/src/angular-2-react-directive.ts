import {
  type IAttributes,
  type IController,
  type IDirectiveController,
  type IDirectiveFactory,
  type Injectable,
  type IScope,
} from 'angular'
import * as React from 'react'

import { kebabCase } from './kebab-case'
import { lazyInjector } from './lazy-injector'
import { registerAngularDirective } from './register-angular-directive'

import type * as angular from 'angular'

type Scope<Props> = {
  props: Props
} & angular.IScope

type State<Props> = {
  didInitialCompile: boolean
  scope?: Scope<Props>
}

type DirectiveParams<
  TScope extends IScope = IScope,
  TElement extends JQLite = JQLite,
  TAttributes extends IAttributes = IAttributes,
  TController extends IDirectiveController = IController,
> = Injectable<IDirectiveFactory<TScope, TElement, TAttributes, TController>>

/**
 * Wraps an Angular component in React. Returns a new React component.
 *
 * Usage:
 *
 *   ```ts
 *   const Bar = { bindings: {...}, template: '...', ... }
 *
 *   angular
 *     .module('foo', [])
 *     .component('bar', Bar)
 *
 *   type Props = {
 *     onChange(value: number): void
 *   }
 *
 *   const Bar = angular2react<Props>('bar', Bar, $compile)
 *
 *   <Bar onChange={...} />
 *   ```
 */
export function angular2reactDirective<Props extends object>(
  componentName: string,
  scope: Record<string, string>,
  component: DirectiveParams,
  $injector = lazyInjector.$injector,
): React.ComponentClass<Props> {
  registerAngularDirective({
    name: componentName,
    // @ts-expect-error
    directive: component,
  })

  const res = {
    [componentName]: class extends React.Component<Props, State<Props>> {
      state: State<Props> = {
        didInitialCompile: false,
      }

      constructor(props: Props) {
        super(props)

        const rootScope = $injector.get('$rootScope').$new(true)
        const state: State<Props> = {
          scope: Object.assign(rootScope, {
            props: writable(this.props),
          }),
          didInitialCompile: false,
        }
        this.state = state
      }

      componentWillUnmount() {
        if (!this.state.scope) {
          return
        }
        this.state.scope.$destroy()
      }

      shouldComponentUpdate(): boolean {
        return false
      }

      // called only once to set up DOM, after componentWillMount
      render() {
        const bindings: Record<string, string> = {}
        if (scope) {
          for (const binding in scope) {
            bindings[kebabCase(binding)] = `props.${binding}`
          }
        }
        const elementName = kebabCase(componentName)
        return React.createElement(elementName, {
          ...bindings,
          ref: this.compile.bind(this),
        })
      }

      // makes angular aware of changed props
      // if we're not inside a digest cycle, kicks off a digest cycle before setting.
      UNSAFE_componentWillReceiveProps(props: Props) {
        if (!this.state.scope) {
          return
        }
        this.state.scope.props = writable(props)
        this.digest()
      }

      private compile(element: HTMLElement) {
        if (this.state.didInitialCompile || !this.state.scope) {
          return
        }

        const $compile = $injector.get('$compile')
        const compileEl = $compile(element)

        compileEl(this.state.scope)

        this.digest()
        this.setState({ didInitialCompile: true })
      }

      private digest() {
        if (!this.state.scope) {
          return
        }
        try {
          this.state.scope.$digest()
        } catch (e) {}
      }
    },
  }

  return res[componentName]
}

/**
 * Angular may try to bind back a value via 2-way binding, but React marks all
 * properties on `props` as non-configurable and non-writable.
 *
 * If we use a `Proxy` to intercept writes to these non-writable properties,
 * we run into an issue where the proxy throws when trying to write anyway,
 * even if we `return false`.
 *
 * Instead, we use the below ad-hoc proxy to catch writes to non-writable
 * properties in `object`, and log a helpful warning when it happens.
 */
function writable<T extends object>(object: T): T {
  const _object = {} as T
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      Object.defineProperty(_object, key, {
        get() {
          return object[key]
        },
        set(value: any) {
          const d = Object.getOwnPropertyDescriptor(object, key)
          if (d?.writable) {
            return (object[key] = value)
          }
          console.warn(
            `Tried to write to non-writable property "${key}" of`,
            object,
            '. Consider using a callback instead of 2-way binding.',
          )
        },
      })
    }
  }
  return _object
}
