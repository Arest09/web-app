import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// компонент для тестирования(выбрасывает ошибку)
export function BugButton () {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const throwError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <button onClick={throwError}>{t('вызвать ошибку')}</button>
}
