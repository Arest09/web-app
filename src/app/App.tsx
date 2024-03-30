import './styles/index.scss'
import { useTheme } from '@/app/provider/ThemeProvider'
import { classNames } from '@/shared/lib'
import { AppRouter } from '@/app/provider/router'
import { Navbar } from '@/widgets/Navbar'
import { SideBar } from '@/widgets/SideBar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userAction } from '@/entities/User'

function App() {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userAction.initAuthData())
  }, [])

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar />
      <div className="page-content">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
