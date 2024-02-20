import '@/app/styles/index.scss'
import { type Theme } from '@/app/provider/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => {
  // eslint-disable-next-line react/display-name
  return (Story: React.FC) => {
    return <div className = {`App ${theme}`}>{<Story/>}</div>
  }
}
