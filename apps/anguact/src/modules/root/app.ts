import { setApp } from '@repo/render-bridge'
import angular from 'angular'

const appMod = angular.module('Demo', [])
setApp(appMod)

export const app = appMod
