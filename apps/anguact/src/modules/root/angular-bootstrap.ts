import angular from 'angular'

import { FourAngular } from '@bf-client/four'
import { MainPageAngular } from '@bf-client/main-page/main.page'
import { ThreeAngular } from '@bf-client/three'
import { TwoAngular } from '@bf-client/two'

import { lazyInjector } from './lazy-injector'
import { reactBootstrap } from './react-bootstrap'

// Expose components to Angular

angular
  .module('Demo', [])
  .component('preMainPage', MainPageAngular)
  .component('twoAngular', TwoAngular)
  .component('threeAngular', ThreeAngular)
  .component('fourAngular', FourAngular)
  .run([
    '$injector',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function (_$injector) {
      lazyInjector.$injector = _$injector
      reactBootstrap()
    },
  ])

angular.bootstrap(document.createElement('div'), ['Demo'])
