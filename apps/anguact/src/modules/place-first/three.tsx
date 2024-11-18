import { angular2react } from '@repo/render-bridge'

import { lazyInjector } from '@bf-client/lazy/lazy-injector'

export const ThreeAngular = {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      three: {{this.$ctrl.three}}
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `,
}

export const Three = angular2react<{ three: number }>(
  'threeAngular',
  ThreeAngular,
  lazyInjector.$injector,
)
