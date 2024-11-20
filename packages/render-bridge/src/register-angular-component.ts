import { type IComponentOptions } from 'angular'

import { lazy } from './lazy-app'
import { lazyInjector } from './lazy-injector'

export function registerAngularComponent({
  component,
  componentName,
}: {
  componentName: string
  component: IComponentOptions
}) {
  const angularComponent = lazy.app.component(componentName, component)

  // for initial start we don't need to run invoke queue
  if (!lazyInjector.isReady) return angularComponent

  const invokeArgs =
    // @ts-expect-error
    angularComponent._invokeQueue[angularComponent._invokeQueue.length - 1]
  const provider = lazyInjector.$compileProvider

  // @ts-expect-error
  provider[invokeArgs[1]].apply(provider, invokeArgs[2])

  return angularComponent
}
