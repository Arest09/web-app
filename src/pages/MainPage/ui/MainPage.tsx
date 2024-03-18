// import { BugButton } from '@/app/provider/ErrorBoundary'
import { Counter } from '@/entities/Counter'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation('main')
  return (
    <div>
      {t('Главная страница')}
      <Counter />
      {/* <BugButton /> */}
    </div>
  )
}

export default MainPage
