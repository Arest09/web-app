import { Button, ButtonTheme } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggle}>
      {t('язык')}
    </Button>
  )
}
