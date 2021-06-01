import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import SearchMain from '.'

describe('<SearchMain />', () => {
  it('Renders without Label', () => {
    renderWithTheme(<SearchMain />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})
