import type { Meta, StoryObj } from '@storybook/react'

import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
  component: PageError,
  title: 'widgets/PageError',
}

type Story = StoryObj<typeof PageError>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {}
