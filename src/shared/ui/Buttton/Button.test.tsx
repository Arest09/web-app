import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('tesst render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  test('test class primary', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('primary')
  })
})
