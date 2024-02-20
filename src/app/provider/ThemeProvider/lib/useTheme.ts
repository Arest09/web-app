import { useContext } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from '../ui/themeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}
// Интерфейсы функций содержат определение  типа функции.
// Затем они должны быть реализованы объектом, который представляет функцию данного типа
// фyнкция возвращает объект с полями toggleTheme и theme
export const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { toggleTheme, theme }
}
