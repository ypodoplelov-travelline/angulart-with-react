import * as React from 'react'

import {
  type Angular2ReactArgs,
  type AngularState,
} from '../core/angular-2-react.args'
import { getAngularParams } from '../infra/get-angular-params'
import { kebabCase } from '../infra/kebab-case'
import { registerAngularModule } from '../infra/register-angular-module'

import { lazy } from './lazy-app'
import { lazyInjector } from './lazy-injector'

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
export function angular2react<Props extends object>(
  params: Angular2ReactArgs<Props>,
): React.ComponentClass<Props> {
  const { bindings: componentBindings, name: componentName } =
    getAngularParams(params)

  const module =
    'directive' in params
      ? lazy.app.directive(componentName, params.directive)
      : lazy.app.component(componentName, params.component)

  registerAngularModule(module)

  const $injector = lazyInjector.$injector
  const res = {
    [componentName]: class extends React.Component<Props, AngularState<Props>> {
      state: AngularState<Props> = {
        didInitialCompile: false,
      }

      constructor(props: Props) {
        super(props)

        const rootScope = $injector.get('$rootScope').$new(true)
        const state: AngularState<Props> = {
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
        if (bindings) {
          for (const binding in componentBindings) {
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

// function runInvokeQueue(queue) {
//   var i, ii
//   for (i = 0, ii = queue.length; i < ii; i++) {
//     var invokeArgs = queue[i],
//       provider = lazyInjector.$injector.get(invokeArgs[0])
//
//     var invokeArgs = queue[i],
//       provider = providerInjector.get(invokeArgs[0])
//
//     provider[invokeArgs[1]].apply(provider, invokeArgs[2])
//
//     provider[invokeArgs[1]].apply(provider, invokeArgs[2])
//   }
// }
