import { Button } from '@/shared/ui/Buttton/Button'
import { useTranslation } from 'react-i18next'
import cls from './LangSwitcher.module.scss'
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
      <Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggle}>
          {t('язык')}
      </Button>
  )
}
