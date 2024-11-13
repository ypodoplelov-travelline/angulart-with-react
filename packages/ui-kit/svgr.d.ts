declare module '*.svg' {
  import { type ComponentPropsWithRef } from 'react'

  export default (props: ComponentPropsWithRef<'svg'>) => JSX.Element
}
