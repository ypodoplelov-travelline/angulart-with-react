import '../just-place'

import { angular2react } from '@repo/render-bridge'

import html from './icon.html?raw'

type IIconScope = {
  name: string
  displayName: string
} & ng.IRootScopeService

const SCOPE: _.Dictionary<string> = {
  name: '=',
}

export const TlIcon = angular2react<{
  name: string
  displayName: string
}>({
  name: 'tlIcon',
  scope: SCOPE,
  directive: [
    () => {
      return {
        restrict: 'EA',
        scope: SCOPE,
        replace: true,
        template: html,
        link: (scope: IIconScope, element: ng.IAugmentedJQuery): void => {
          // Polyfill для IE
          element[0].setAttribute('focusable', 'false')

          scope.displayName = scope.name

          const unwatch: Function = scope.$watch(
            () => [scope.name, 'ru'].join('-'),
            (): void => {
              scope.displayName = scope.name
            },
          )

          scope.$on('$destroy', (): void => {
            unwatch()
          })
        },
      }
    },
  ],
})
