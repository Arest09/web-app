import { classNames } from '@/shared/lib'
import React from 'react'
import { type PropsWithChildren } from 'react'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@/features/LangeSwitcher'

interface PageErrorProps extends PropsWithChildren {
  className?: string
}

const reloadPage = () => {
  location.reload()
}

export function PageError (props: PageErrorProps) {
  const { t } = useTranslation()
  const { className } = props

  return (
      <div className={classNames(cls.errorInfo, {}, [className])}>
          {t('Произошла не предвиденная ошибка')}
          <button onClick={reloadPage}>{t('перезагрузить')}</button>
          <LangSwitcher />
      </div>
  )
}
