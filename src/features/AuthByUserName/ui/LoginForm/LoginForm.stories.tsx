import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Feature/LoginForm',
}

type Story = StoryObj<typeof LoginForm>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export default meta

export const DEFAULT: Story = {
  args: {},
}

export const WITH_ERROR: Story = {
  args: {},
}

export const WITH_LOADING: Story = {
  args: {},
}

DEFAULT.decorators = [
  StoreDecorator({
    login: {
      username: 'test',
      password: '123',
      isLoading: false,
    },
  }),
]

WITH_ERROR.decorators = [
  StoreDecorator({
    login: {
      username: 'test',
      password: '123',
      isLoading: false,
      error: 'something went wrong',
    },
  }),
]

WITH_LOADING.decorators = [
  StoreDecorator({
    login: {
      username: 'test',
      password: '123',
      isLoading: true,
    },
  }),
]
