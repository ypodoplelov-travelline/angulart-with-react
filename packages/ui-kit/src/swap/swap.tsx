import type { ReactNode } from 'react'

type Props =
  | {
      is?: boolean
      isSlot: ReactNode
      children: ReactNode
    }
  | {
      has: boolean
      children: ReactNode
    }

export function Swap(props: Props) {
  if ('has' in props) {
    return props.has ? <>{props.children}</> : undefined
  }

  if ('is' in props && props.is) {
    return <>{props.isSlot}</>
  }
  return <>{props.children}</>
}
