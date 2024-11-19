import '@bf-client/main-page/main.page'

import { lazyInjector } from '@repo/render-bridge'
import angular from 'angular'

import { app } from '@bf-client/root/app'

import { renderReactWrapper } from './render-react-wrapper'

export function renderApp() {
  app.run([
    '$injector',
    function (_$injector: angular.auto.IInjectorService) {
      lazyInjector.setInjector(_$injector)
      renderReactWrapper()
    },
  ])

  angular.bootstrap(document.createElement('div'), ['Demo'])
}
