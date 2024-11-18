import angular from 'angular'

import { app } from '@bf-client/root/app'

import { appRegisterRoots } from './app-register-roots'
import { lazyInjector } from './lazy-injector'
import { renderReactWrapper } from './render-react-wrapper'

export function renderApp() {
  appRegisterRoots()

  app.run([
    '$injector',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function (_$injector) {
      lazyInjector.$injector = _$injector
      renderReactWrapper()
    },
  ])

  angular.bootstrap(document.createElement('div'), ['Demo'])
}
