import { type Decorator } from '@storybook/react'
import '@/app/styles/index.scss'
import { ThemeProvider } from '@/app/provider/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

export const StyleDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{Story()}</ThemeProvider>
    </BrowserRouter>
  )
}
