import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { AppRoutes } from '@/shared/config'
import { type RouteProps } from 'react-router-dom'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: AppRoutes.MAIN
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: AppRoutes.ABOUT
  }
}
