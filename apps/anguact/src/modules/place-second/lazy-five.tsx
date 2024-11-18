import { Six } from './six'

export function LazyFive({ two }: { two: number }) {
  return (
    <div>
      five: {two}
      <Six three={two * 2} />
    </div>
  )
}

export default LazyFive
