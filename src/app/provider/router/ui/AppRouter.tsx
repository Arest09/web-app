import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "@/app/provider/router/config"

export function AppRouter() {
  return (
    <Suspense fallback={<>loading</>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route path={path} element={element} key={path} />
        })}
      </Routes>
    </Suspense>
  )
}
