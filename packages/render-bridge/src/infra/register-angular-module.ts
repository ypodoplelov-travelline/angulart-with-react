import { type IModule } from 'angular'

import { lazyInjector } from '../interface/lazy-injector'

export function registerAngularModule(module: IModule) {
  // for initial start we don't need to run invoke queue
  if (!lazyInjector.isReady) return module

  const invokeArgs =
    // @ts-expect-error
    module._invokeQueue[module._invokeQueue.length - 1]
  const provider = lazyInjector.$compileProvider

  // @ts-expect-error
  provider[invokeArgs[1]].apply(provider, invokeArgs[2])

  return module
}
