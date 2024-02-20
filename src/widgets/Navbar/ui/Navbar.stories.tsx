import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/provider/ThemeProvider'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'widgets/Navbar'
}

type Story = StoryObj<typeof Navbar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {

  }
}
export const LIGHT: Story = {
  args: {

  }
}
