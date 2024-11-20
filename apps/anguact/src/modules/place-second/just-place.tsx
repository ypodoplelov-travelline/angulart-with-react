import { react2angular } from '@repo/render-bridge'

export function JustPlace({ title }: { title: string }) {
  console.log('title', title)
  return <div>just place react: {title}</div>
}

export const JustPlaceAngular = react2angular(JustPlace, 'justPlaceAngular', [
  'title',
])
