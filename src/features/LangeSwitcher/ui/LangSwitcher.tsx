import { Button } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
      <Button className={classNames('', {}, [className])} onClick={toggle}>
          {t('язык')}
      </Button>
  )
}
