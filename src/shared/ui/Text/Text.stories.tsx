import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { Theme } from '@/app/provider/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Shared/Text',
}

type Story = StoryObj<typeof Text>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {
  args: {
    title: 'title',
    text: 'text',
  },
}

export const ERROR: Story = {
  args: {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
  },
}

export const ONLY_TITLE: Story = {
  args: {
    title: 'title',
  },
}

export const ONLY_TEXT: Story = {
  args: {
    text: 'text',
  },
}

export const DEFAULT_DARK: Story = {
  args: {
    title: 'title',
    text: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const ONLY_TITLE_DARK: Story = {
  args: {
    title: 'title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ONLY_TEXT_DARK: Story = {
  args: {
    text: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
