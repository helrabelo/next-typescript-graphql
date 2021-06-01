import { Story, Meta } from '@storybook/react/types-6-0'

import SetCard, { SetCardProps } from '.'

export default {
  title: 'SetCard',
  component: SetCard,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    slug: 'base-set',
    name: 'Base Set',
    year: '2003',
    image: '/img/pokemon-base.png',
    cardsInSet: '120'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<SetCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <SetCard {...args} />
  </div>
)
