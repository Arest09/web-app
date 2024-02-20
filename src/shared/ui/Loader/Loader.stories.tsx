import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/provider/ThemeProvider'

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Lib/Loader'
}

type Story = StoryObj<typeof Loader>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
