import { Story, Meta } from '@storybook/react/types-6-0'
import CardsTable, { CardsTableProps } from '.'

export default {
  title: 'CardsTable',
  component: CardsTable,
  args: {
    cards: [
      {
        number: 1,
        cardImage: '/img/logo.svg',
        cardName: 'Good Card',
        set: 'Aquapolis',
        year: 2003,
        psa10: {
          price: 123123,
          change30d: 123123,
          population: 123123,
          lastSale: 123123
        },
        psa9: {
          price: 123123,
          change30d: 123123,
          population: 123123,
          lastSale: 123123
        }
      },
      {
        number: 2,
        cardImage: '/img/logo.svg',
        cardName: 'Good Card',
        set: 'Aquapolis',
        year: 2003,
        psa10: {
          price: 123123,
          change30d: 123123,
          population: 123123,
          lastSale: 123123
        },
        psa9: {
          price: 123123,
          change30d: 123123,
          population: 123123,
          lastSale: 123123
        }
      }
    ]
  }
} as Meta

export const Default: Story<CardsTableProps> = (args) => (
  <CardsTable {...args} />
)
