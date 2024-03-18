import type { StorybookConfig } from '@storybook/react-webpack5'
import webpack, { RuleSetRule } from 'webpack'
import { buildDefinePlugin } from '../build/plugins/buildDefinePlugin'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    '@storybook/preset-scss',
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: webpack.Configuration, { configType }) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../../src'),
      }
    }
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

    config.module?.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve?.extensions?.push('.ts', '.tsx')

    config.plugins?.push(
     buildDefinePlugin(true)
    )
    return config
  },
}
export default config
