import SpinSvg from './spin.svg'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap: Record<SpinnerSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-16 h-16',
}

export function Spinner({ size = 'sm' }: Props) {
  const sizeClass = sizeMap[size]

  return (
    <span role="status">
      <SpinSvg
        aria-hidden="true"
        className={`${sizeClass} animate-spin fill-blue-600 text-gray-200 dark:text-gray-600`}
      />
      <span className="sr-only">Loading...</span>
    </span>
  )
}
