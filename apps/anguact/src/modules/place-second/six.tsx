import { angular2react } from '@repo/render-bridge'

export const SixAngular = {
  bindings: {
    three: '<',
  },
  template: `
    <div>
      six angular: {{this.$ctrl.three}}
      end
    </div>
  `,
}

const SixA = angular2react<{ three: number }>('sixAngular', SixAngular)

export function Six({ three }: { three: number }) {
  return (
    <>
      six wrap
      <SixA three={three} />
    </>
  )
}
