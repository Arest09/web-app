import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/app/provider/router/config'
import { PageLoader } from '@/widgets/PageLoader'

export function AppRouter () {
  return (
      <Suspense fallback={<PageLoader/>}>
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
