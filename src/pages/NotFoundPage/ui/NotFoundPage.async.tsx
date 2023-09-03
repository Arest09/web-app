import { lazy } from 'react'
// в данном случае страница маленькая и делать ее асинхронной нет смысла
export const NotFoundPageAsync = lazy(async () => await import('./NotFoundPage'))
