//import '!style-loader!css-loader!postcss-loader!../../../apps/web/app/styles.css'

import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'

import '../../../packages/ui-kit/src/ui-kit.base.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
        </>
      )
    },
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
