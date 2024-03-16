import { classNames } from '@/shared/lib'
import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/ui/Loader/Loader'

// так как данный loader относится именно к нашему приложению,
// каркасу и т.д то мы помещаем его в виджет, в обратном случае если бы это  была крутилка,
// которая никак не связана с нашим приложением и бизнес логикой то мы поместили мы в shared

interface PageLoaderProps {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
