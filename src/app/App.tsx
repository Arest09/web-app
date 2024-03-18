import './styles/index.scss'
import { useTheme } from '@/app/provider/ThemeProvider'
import { classNames } from '@/shared/lib'
import { AppRouter } from '@/app/provider/router'
import { Navbar } from '@/widgets/Navbar'
import { SideBar } from '@/widgets/SideBar'
import { StoreProvider } from './provider/StoreProvider'
import { Counter } from '@/entities/Counter'
function App() {
  const { theme } = useTheme()

  return (
    <StoreProvider>
      <div className={classNames('App', {}, [theme])}>
        <Navbar />
        <div className="page-content">
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </StoreProvider>
  )
}

export default App
