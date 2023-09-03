import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { AppRoutes, routePath } from '@/shared/config'
import { type RouteProps } from 'react-router-dom'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: routePath.main
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: routePath.about
  },
  [AppRoutes.NOUT_FOUND]: {
    element: <NotFoundPage/>,
    path: routePath.not_found
  }
}
