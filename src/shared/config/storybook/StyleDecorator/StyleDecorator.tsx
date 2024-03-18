import { type Decorator } from '@storybook/react'
import '@/app/styles/index.scss'
import { ThemeProvider } from '@/app/provider/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '@/app/provider/StoreProvider'

export const StyleDecorator: Decorator = (Story) => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>{Story()}</ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  )
}
