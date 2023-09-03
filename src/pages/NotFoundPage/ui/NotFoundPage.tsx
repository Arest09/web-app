import { useTranslation } from 'react-i18next'

function NotFoundPage () {
  const { t } = useTranslation('notFound')
  return (
      <div>{t('Страница не найдена')}</div>
  )
}

export default NotFoundPage
