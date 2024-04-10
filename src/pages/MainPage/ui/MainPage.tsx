// import { BugButton } from '@/app/provider/ErrorBoundary'
import { Counter } from '@/entities/Counter'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { Button } from '@/shared/ui/Buttton/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation('main')
  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    setValue(value)
  }
  return (
    <div>
      {t('Главная страница')}
      <Input onChange={onChange} value={value} placeholder="foo" />
      <Counter />
      {/* <BugButton /> */}
    </div>
  )
}

export default MainPage
