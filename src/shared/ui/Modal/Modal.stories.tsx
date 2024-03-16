import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/provider/ThemeProvider'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Shared/Modal',
  args: {
    container: null,
  },
}

type Story = StoryObj<typeof Modal>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const PRIMARY: Story = {
  args: {
    isOpen: true,
    children: 'text',
  },
}

// export const Dark: Story = {
//   decorators: [ThemeDecorator(Theme.DARK)],
//   args: {
//     isOpen: true,
//     children: 'text',
//   },
// }
