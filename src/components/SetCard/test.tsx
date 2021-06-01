import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SetCard from '.'

const props = {
  slug: 'base-set',
  name: 'Base Set',
  year: '2003',
  image: '/img/pokemon-base.png',
  cardsInSet: '120'
}

describe('<SetCard />', () => {
  it('should render correctly', async () => {
    const { container } = renderWithTheme(<SetCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.year })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: '2003 Base Set 120 cards in set' })
    ).toHaveAttribute('href', `/sets/${props.slug}`)

    expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<SetCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<SetCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
