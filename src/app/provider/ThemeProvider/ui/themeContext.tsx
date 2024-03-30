import { type FC, useMemo, useState, createContext, type PropsWithChildren } from 'react'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

interface ThemeProviderProps extends PropsWithChildren {
  initialTheme?: Theme
}

export const ThemeContext = createContext<ThemeContextProps>({})

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    }
  }, [theme]) // здесь мемоизация не имеет смысла

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
