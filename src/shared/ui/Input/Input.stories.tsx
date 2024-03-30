import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'

import { Input } from './Input'
const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Shared/Input',
}

type Story = StoryObj<typeof Input>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {
  args: {
    placeholder: 'name',
    value: 'value',
  },
  render: function Component(args) {
    const [, setValue] = useArgs()

    const handleChange = (value: string) => {
      setValue({ value })
    }
    return <Input {...args} onChange={handleChange} />
  },
}
