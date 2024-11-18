import { MainPageAngular } from '@bf-client/main-page/main.page'
import { FourAngular } from '@bf-client/place-first/four'
import { ThreeAngular } from '@bf-client/place-first/three'
import { TwoAngular } from '@bf-client/place-first/two'

import { app } from './app'

// Expose components to Angular

export function appRegisterRoots() {
  app
    .component('preMainPage', MainPageAngular)
    .component('twoAngular', TwoAngular)
    .component('threeAngular', ThreeAngular)
    .component('fourAngular', FourAngular)
}
