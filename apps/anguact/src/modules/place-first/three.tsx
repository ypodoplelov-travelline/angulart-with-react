import './four'

import { angular2react } from '@repo/render-bridge'

export const ThreeAngular = {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      three angular: {{this.$ctrl.three}}
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `,
}

export const Three = angular2react<{ three: number }>(
  'threeAngular',
  ThreeAngular,
)
