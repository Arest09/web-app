export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOUT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOUT_FOUND]: '*',
}
