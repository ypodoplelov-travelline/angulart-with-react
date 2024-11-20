import './four'
import './sub/sub.directive'

import { angular2react } from '@repo/render-bridge'

export const Three = angular2react<{ three: number }>('threeAngular', {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      three angular: {{this.$ctrl.three}}
      <tl-sub name="this.$ctrl.three * 2"></tl-sub>
      <four-angular four="this.$ctrl.three * 2"></four-angular>
    </div>
  `,
})
