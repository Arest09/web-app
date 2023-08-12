import "./styles/index.scss"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { Suspense } from "react"
import { useTheme } from "@/app/provider/ThemeProvider"
import { AboutPage } from "@/pages/AboutPage"
import { MainPage } from "@/pages/MainPage"
import { classNames } from "@/shared/lib"

function App() {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/main"}>главная</Link> <Link to={"/about"}>about</Link>
      <button onClick={toggleTheme}>theme</button>
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route path={"/main"} element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
