import type { StorybookConfig } from '@storybook/react-vite'
// import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../../../packages/ui-kit/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/web-client/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../../../apps/web-client/public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-themes',
  ],

  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // if (config.resolve) {
    //   config.resolve.alias = {
    //     ...config.resolve?.alias,
    //     '~/': resolve(__dirname, '../../../apps/web/app/'),
    //   }
    // }

    config.plugins = [
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: true,
          titleProp: true,
        },
        include: '**/*.svg',
      }),
      ...config.plugins,
    ]

    return config
  },
}

export default config
