/**
 * Angular2react needs an $injector, but it doesn't actually invoke $injector.get
 * until we invoke ReactDOM.render. We can take advantage of this to provide the
 * "lazy" injector below to React components created with angular2react, as a way
 * to avoid component ordering issues.
 *
 * @see https://github.com/coatue-oss/angular2react/issues/12
 */
import type angular from 'angular'

let $injector: angular.auto.IInjectorService

export const lazyInjector = {
  get $injector() {
    // @ts-expect-error
    return {
      get get() {
        return $injector.get
      },
    }
  },
  set $injector(_$injector: angular.auto.IInjectorService) {
    $injector = _$injector
  },
}
