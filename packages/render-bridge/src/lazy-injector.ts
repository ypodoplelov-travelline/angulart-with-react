import { $injector as defaultInjector } from 'ngimport'

/**
 * Angular2react needs an $injector, but it doesn't actually invoke $injector.get
 * until we invoke ReactDOM.render. We can take advantage of this to provide the
 * "lazy" injector below to React components created with angular2react, as a way
 * to avoid component ordering issues.
 *
 * @see https://github.com/coatue-oss/angular2react/issues/12
 */
import type angular from 'angular'

let $injector: angular.auto.IInjectorService = defaultInjector
let $compileProvider: angular.ICompileProvider

export const lazyInjector = {
  get $injector() {
    return {
      get get() {
        return $injector.get
      },
      // loadNewModules(...args: Parameters<typeof $injector.loadNewModules>) {
      //   if (!$injector) return
      //   $injector.loadNewModules(...args)
      // },
    }
  },
  get $compileProvider() {
    return $compileProvider
  },
  get isReady(): boolean {
    return !!$injector
  },
  setInjector(value: angular.auto.IInjectorService) {
    $injector = value
  },
  setCompileProvider(value: angular.ICompileProvider) {
    $compileProvider = value
  },
}
