import { Six } from './six'

export function LazyFive({ two }: { two: number }) {
  return (
    <div>
      five react: {two}
      <Six three={two * 2} />
    </div>
  )
}

export default LazyFive
