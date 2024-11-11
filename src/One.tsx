import { angular2react } from 'angular2react'
import { lazyInjector } from './lazyInjector'

export const OneAngular = {
  template: `
    one
    <two-angular two="2"></two-angular>
  `
}

export const One = angular2react('oneAngular', OneAngular, lazyInjector.$injector)
