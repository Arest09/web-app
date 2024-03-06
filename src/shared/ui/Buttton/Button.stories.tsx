import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
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

export const BACKGROUND_THEME: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BACKGROUND_IVERTED_THEME: Story = {
  args: {
    children: 'button',
    theme: ButtonTheme.BACKGROND_INVERTED
  }
}

export const SQUARE_S: Story = {
  args: {
    children: '>',
    size: ButtonSize.S,
    square: true
  }
}

export const SQUARE_M: Story = {
  args: {
    children: '>',
    size: ButtonSize.M,
    square: true
  }
}

export const SQUARE_L: Story = {
  args: {
    children: '>',
    size: ButtonSize.L,
    square: true
  }
}

export const SQUARE_XL: Story = {
  args: {
    children: '>',
    size: ButtonSize.XL,
    square: true
  }

}
export const SIZE_S: Story = {
  args: {
    children: 'text',
    size: ButtonSize.S
  }
}

export const SIZE_M: Story = {
  args: {
    children: 'text',
    size: ButtonSize.M
  }
}

export const SIZE_L: Story = {
  args: {
    children: 'text',
    size: ButtonSize.L
  }
}

export const SIZE_XL: Story = {
  args: {
    children: 'text',
    size: ButtonSize.XL
  }
}
