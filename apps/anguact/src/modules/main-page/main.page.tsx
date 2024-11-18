import { angular2react } from '@repo/render-bridge'

import { lazyInjector } from '@bf-client/root/lazy-injector'

export const MainPageAngular = {
  template: `
    one
    <two-angular two="2"></two-angular>
  `,
}

export const MainPage = angular2react(
  'preMainPage',
  MainPageAngular,
  lazyInjector.$injector,
)
