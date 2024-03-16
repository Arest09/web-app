import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from '@/shared/config/i18n/i18nForTest'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

export interface renderWithRouterOption {
  route?: string
}

export function componentRender(component: ReactNode, options: renderWithRouterOption = {}) {
  const { route = '/' } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
    </MemoryRouter>,
  )
}
