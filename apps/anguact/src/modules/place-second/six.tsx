import './seven'
import './icon/icon.directive'

import { angular2react } from '@repo/render-bridge'

const SixAngular = angular2react<{ three: number }>({
  name: 'sixAngular',
  component: {
    bindings: {
      three: '<',
    },
    template: `
    <div>
      six angular: {{this.$ctrl.three}}
      before end
      <tl-icon name="this.$ctrl.three"></tl-icon>
      <seven-angular two="this.$ctrl.three * 2"></seven-angular>
    </div>
  `,
  },
})

export function Six({ three }: { three: number }) {
  return (
    <div>
      six wrap
      <div>
        <SixAngular three={three} />
      </div>
    </div>
  )
}
