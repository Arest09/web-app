import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonTheme } from './Button'
import { Theme } from '@/app/provider/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Shared/Button'
}

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {
  args: {
    children: 'button'
  }
}

export const PRIMARY: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: 'button'
  }
}

export const PRIMARY_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ButtonTheme.PRIMARY,
    children: 'button'
  }
}

export const OUTLINE: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.OUTLINE
  }
}

export const CLEAR: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.CLEAR
  }
}
