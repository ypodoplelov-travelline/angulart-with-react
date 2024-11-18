import { FourAngular } from '@bf-client/four'
import { MainPageAngular } from '@bf-client/main-page/main.page'
import { ThreeAngular } from '@bf-client/three'
import { TwoAngular } from '@bf-client/two'

import { app } from './app'

// Expose components to Angular

export function appRegisterRoots() {
  app
    .component('preMainPage', MainPageAngular)
    .component('twoAngular', TwoAngular)
    .component('threeAngular', ThreeAngular)
    .component('fourAngular', FourAngular)
}
