import '../place-first/two'

import { angular2react } from '@repo/render-bridge'

export const MainPageAngular = {
  template: `
    one angular
    <two-angular two="2"></two-angular>
  `,
}

export const MainPage = angular2react({
  name: 'preMainPage',
  component: MainPageAngular,
})
