import { SideBar } from './SideBar'
import { fireEvent, screen } from '@testing-library/react'
import {
  renderWithTranslation
} from '@/shared/lib/helper/renderWithTranslation/renderWithTranslation'

describe('SideBar', () => {
  test('test render', () => {
    renderWithTranslation(<SideBar />)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  test('test toggle', () => {
    renderWithTranslation(<SideBar />)

    const sidebar = screen.getByTestId('sidebar')
    const sidebarToggle = screen.getByTestId('sidebar-toggle')
    fireEvent.click(sidebarToggle)
    expect(sidebar).toHaveClass('collapsed')
    screen.debug()
  })
})
