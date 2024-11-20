import { angular2react } from '@repo/render-bridge'

import html from './sub.html?raw'

type IIconScope = {
  name: string
  displayName: string
} & ng.IRootScopeService

const SCOPE: _.Dictionary<string> = {
  name: '=',
}

export const SubDirective = angular2react<{ name: string }>({
  name: 'tlSub',
  scope: SCOPE,
  directive: [
    () => {
      return {
        restrict: 'EA',
        scope: SCOPE,
        replace: true,
        template: html,
        link: (scope: IIconScope): void => {
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
