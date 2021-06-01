import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>TCG Trends</Heading>)
    expect(screen.getByRole('heading', { name: /TCG Trends/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">TCG Trends</Heading>)
    expect(screen.getByRole('heading', { name: /TCG Trends/i })).toHaveStyle({
      color: '#09101D'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">TCG Trends</Heading>)
    expect(screen.getByRole('heading', { name: /TCG Trends/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /TCG Trends/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">TCG Trends</Heading>)

    expect(screen.getByRole('heading', { name: /TCG Trends/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
})
