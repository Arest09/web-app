import "./styles/index.scss"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/aboutPage/AboutPage.async"
import { Suspense } from "react"
import { MainPageAsync } from "./pages/mainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"

function App() {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={"/main"}>главная</Link> <Link to={"/about"}>about</Link>
      <button onClick={toggleTheme}>theme</button>
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route path={"/main"} element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
