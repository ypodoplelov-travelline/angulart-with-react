import { angular2react } from 'angular2react'

import { lazyInjector } from '@bf-client/root/lazy-injector'

export const LazyAngular = {
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
  LazyAngular,
  lazyInjector.$injector,
)
