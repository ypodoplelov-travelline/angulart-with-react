import { Badge } from './badge'
import { badgeColorMap } from './badge-color-map'

import type { Meta, StoryFn } from '@storybook/react'
import type { BadgeColorType } from './types'

const meta: Meta<typeof Badge> = {
  title: 'ui-kit / Atoms / Badge',
  component: Badge,
}

export default meta

export const Default: StoryFn<typeof Badge> = () => {
  const keys = Object.keys(badgeColorMap)

  return (
    <>
      <div>
        <div>default sm size:</div>
        {keys.map((key) => {
          return (
            <Badge key={key} color={key as BadgeColorType}>
              {key}
            </Badge>
          )
        })}
      </div>
      <div>
        <div>xs size:</div>
        {keys.map((key) => {
          return (
            <Badge key={key} color={key as BadgeColorType} size="xs">
              {key}
            </Badge>
          )
        })}
      </div>
    </>
  )
}
