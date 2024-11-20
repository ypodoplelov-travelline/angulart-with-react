import type { Angular2ReactArgs } from '../core/angular-2-react.args'

export function getAngularParams<Props extends object>(
  params: Angular2ReactArgs<Props>,
): {
  name: string
  bindings?: Record<string, unknown>
} {
  if ('directive' in params) {
    return {
      name: params.name,
      bindings: params.scope,
    }
  }
  return {
    name: params.name,
    bindings: params.component.bindings,
  }
}
