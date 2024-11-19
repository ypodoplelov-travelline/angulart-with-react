import { angular2react } from '@repo/render-bridge'

const SixAngular = angular2react<{ three: number }>('sixAngular', {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      six angular: {{this.$ctrl.three}}
      end
    </div>
  `,
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
