import { type IDirectiveFactory } from 'angular'

import { lazy } from './lazy-app'
import { lazyInjector } from './lazy-injector'

export function registerAngularDirective({
  directive,
  name,
}: {
  name: string
  directive: IDirectiveFactory
}) {
  const instance = lazy.app.directive(name, directive)
  const compile = lazyInjector.$compileProvider
  console.log('compile', compile)
  debugger

  // for initial start we don't need to run invoke queue
  if (!lazyInjector.isReady) return instance

  const invokeArgs =
    // @ts-expect-error
    instance._invokeQueue[instance._invokeQueue.length - 1]
  const provider = lazyInjector.$compileProvider

  // @ts-expect-error
  provider[invokeArgs[1]].apply(provider, invokeArgs[2])

  return instance
}
