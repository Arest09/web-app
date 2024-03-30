import App from './app/App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/provider/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from './app/provider/ErrorBoundary'
import 'app/styles/index.scss'
import { StoreProvider } from './app/provider/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
)
