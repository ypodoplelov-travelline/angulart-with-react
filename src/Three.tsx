import { angular2react } from 'angular2react'
import { lazyInjector } from './lazyInjector'

export const ThreeAngular = {
  bindings: {
    three: '<'
  },
  template: `
    <div>
      three: {{this.$ctrl.three}}
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `
}

export const Three = angular2react<{three: number}>('threeAngular', ThreeAngular, lazyInjector.$injector)
