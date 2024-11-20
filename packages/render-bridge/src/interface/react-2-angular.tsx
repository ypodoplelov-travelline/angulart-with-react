import { type IAugmentedJQuery, type IComponentOptions } from 'angular'
import fromPairs from 'lodash.frompairs'
import * as React from 'react'
import { createRoot, type Root } from 'react-dom/client'

import { NgComponent } from '../infra/ng-component'
import { registerAngularModule } from '../infra/register-angular-module'

import { lazy } from './lazy-app'

/**
 * Wraps a React component in Angular. Returns a new Angular component.
 *
 * Usage:
 *
 *   ```ts
 *   type Props = { foo: number }
 *   class ReactComponent extends React.Component<Props, S> {}
 *   const AngularComponent = react2angular(ReactComponent, ['foo'])
 *   ```
 */
export function react2angular<Props extends {}>(
  Class: React.ComponentType<Props>,
  componentName: string,
  bindingNames: (keyof Props)[] | null = null,
  injectNames: string[] = [],
): IComponentOptions {
  const names =
    bindingNames ||
    (Class.propTypes && (Object.keys(Class.propTypes) as (keyof Props)[])) ||
    []

  const res: IComponentOptions = {
    bindings: fromPairs(names.map((_) => [_, '<'])),
    controller: [
      '$element',
      ...injectNames,
      class extends NgComponent<Props> {
        root: Root

        static get $$ngIsClass() {
          return true
        }

        isDestroyed = false
        injectedProps: Record<string, any>

        constructor(
          private $element: IAugmentedJQuery,
          ...injectedProps: any[]
        ) {
          super()
          this.injectedProps = {}
          injectNames.forEach((name, i) => {
            this.injectedProps[name] = injectedProps[i]
          })
          this.root = createRoot($element[0])
        }

        $onInit() {
          names.forEach((name) => {
            this.props[name] = (this as any)[name]
          })
        }

        render() {
          if (!this.isDestroyed) {
            this.root.render(
              <Class {...this.props} {...(this.injectedProps as any)} />,
            )
          }
        }

        componentWillUnmount() {
          this.isDestroyed = true
          if (this.$element[0] && this.root) {
            this.root.unmount()
          }
        }
      },
    ],
  }

  const angularComponent = lazy.app.component(componentName, res)
  registerAngularModule(angularComponent)

  return res
}
