import { type FC, useMemo, useState, createContext, type PropsWithChildren } from 'react'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>(null)

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme]) // здесь мемоизация не имеет смысла

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
