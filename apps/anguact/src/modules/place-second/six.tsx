import { angular2react } from '@repo/render-bridge'

import { lazyInjector } from '@bf-client/lazy/lazy-injector'
import { app } from '@bf-client/root/app'

export const SixAngular = {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      six: {{this.$ctrl.three}}
      end
    </div>
  `,
}

export const Six = angular2react<{ three: number }>(
  'sixAngular',
  SixAngular,
  lazyInjector.$injector,
)

app.component('sixAngular', SixAngular)

// lazyInjector.$injector.loadNewModules
