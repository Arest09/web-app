import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from '@/shared/config/i18n/i18nForTest'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { type StateScheme, StoreProvider } from '@/app/provider/StoreProvider'

export interface componentRenderOptions {
  route?: string
  initialState?: Partial<StateScheme>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  )
}
