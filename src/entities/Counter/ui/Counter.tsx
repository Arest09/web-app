import { Button } from '@/shared/ui/Buttton/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterAction } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export function Counter() {
  const { t } = useTranslation('main')

  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterAction.increment())
  }
  const decrement = () => {
    dispatch(counterAction.decrement())
  }
  return (
    <div data-testid="counter">
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button onClick={increment} data-testid="counter-increment">
        {t('Увеличить')}
      </Button>
      <Button onClick={decrement} data-testid="counter-decrement">
        {t('Уменьшить')}
      </Button>
    </div>
  )
}
