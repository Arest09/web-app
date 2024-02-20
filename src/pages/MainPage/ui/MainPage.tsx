// import { BugButton } from '@/app/provider/ErrorBoundary'
import { useTranslation } from 'react-i18next'

function MainPage () {
  const { t } = useTranslation('main')
  return (
      <div>
          {t('Главная страница')}
          {/* <BugButton /> */}
      </div>
  )
}

export default MainPage
