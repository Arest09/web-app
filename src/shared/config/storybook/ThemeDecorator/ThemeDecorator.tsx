import '@/app/styles/index.scss'
import { ThemeProvider, type Theme } from '@/app/provider/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
  // eslint-disable-next-line react/display-name
  return (Story: React.FC) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`App ${theme}`}>
          <div className="page-wrapper" style={{ height: '100vh' }}>
            <Story />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}
