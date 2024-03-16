import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/provider/ThemeProvider'
import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: 'pages/MainPage',
}

type Story = StoryObj<typeof MainPage>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DARK: Story = {
  decorators: [
    (Story) => (
      <div
        className="page-wrapper"
        style={{
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
    ThemeDecorator(Theme.DARK),
  ],
  args: {},
}
export const LIGHT: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        className="page-wrapper"
        style={{
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
