import "./styles/index.scss"
import { Link } from "react-router-dom"
import { useTheme } from "@/app/provider/ThemeProvider"
import { classNames } from "@/shared/lib"
import { AppRouter } from "@/app/provider/router"

function App() {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/main"}>главная</Link> <Link to={"/about"}>about</Link>
      <button onClick={toggleTheme}>theme</button>
      <AppRouter />
    </div>
  )
}

export default App
