import { Counter } from './Counter'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { componentRender } from '@/shared/config/test/componentRender/componentRender'

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
  })
  test('increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    const incrementBtn = screen.getByTestId('counter-increment')
    fireEvent.click(incrementBtn)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
  })
  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })

    const incrementBtn = screen.getByTestId('counter-decrement')
    await userEvent.click(incrementBtn)

    expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
  })
})
