import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from '@/app/provider/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  title: 'Shared/AppLink'
}

type Story = StoryObj<typeof AppLink>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const PRIMARY_DARK: Story = {
  args: {
    children: 'ссылка 1',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const PRIMARY_LIGHT: Story = {
  args: {
    children: 'ссылка 2',
    theme: AppLinkTheme.PRIMARY
  }
}

export const SECONDARY: Story = {
  args: {
    children: 'ссылка 2',
    theme: AppLinkTheme.SECONDARY
  }
}

export const SECONDARY_DARK: Story = {
  args: {
    children: 'ссылка 2',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
