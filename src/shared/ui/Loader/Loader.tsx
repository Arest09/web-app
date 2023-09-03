import { classNames } from '@/shared/lib'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export function Loader (props: LoaderProps) {
  const { className } = props
  return (
      <div className={classNames('', {}, [className])}>
          <div className='lds-spinner'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}
