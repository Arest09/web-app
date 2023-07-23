import "./index.scss"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/aboutPage/AboutPage.async"
import { Suspense } from "react"
import { MainPageAsync } from "./pages/mainPage/MainPage.async"

function App() {
  return (
    <div className='App'>
      <Link to={"/main"}>главная</Link> <Link to={"/about"}>about</Link>
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
