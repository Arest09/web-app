import { SideBar } from './SideBar'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from '@/shared/config/test/renderWithTranslation/renderWithTranslation'
import { componentRender } from '@/shared/config/test/componentRender/componentRender'

describe('SideBar', () => {
  test('test render', () => {
    componentRender(<SideBar />)

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<SideBar />)

    const sidebar = screen.getByTestId('sidebar')
    const sidebarToggle = screen.getByTestId('sidebar-toggle')
    fireEvent.click(sidebarToggle)
    expect(sidebar).toHaveClass('collapsed')
    screen.debug()
  })
})
