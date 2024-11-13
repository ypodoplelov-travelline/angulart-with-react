import { type ReactNode } from 'react'

type Props = {
  onSubmit?: () => void
  children: ReactNode
  className?: string
}
export function Form({ onSubmit, children, className }: Props) {
  return (
    <form
      className={className}
      onSubmit={(ev) => {
        ev.preventDefault()
        onSubmit && onSubmit()
      }}
    >
      {children}
    </form>
  )
}
