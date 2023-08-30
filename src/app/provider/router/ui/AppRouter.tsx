import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/app/provider/router/config'

export function AppRouter () {
  console.log(__IS__DEV, 'is dev')
  return (
      <Suspense fallback={<>loading</>}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }) => {
          return (
              <Route path={path} element={<div className='page-wrapper'>{element}</div>} key={path} />
          )
        })}
          </Routes>
      </Suspense>
  )
}
