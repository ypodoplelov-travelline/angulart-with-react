import { lazyInjector, setApp } from '@repo/render-bridge'
import angular from 'angular'

const appMod = angular
  .module('Demo', [])
  .config(($compileProvider: angular.ICompileProvider) => {
    lazyInjector.setCompileProvider($compileProvider)
  })
setApp(appMod)

export const app = appMod
