import { Story, Meta } from '@storybook/react/types-6-0'

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import SearchMain, { SearchMainProps } from '.'

export default {
  title: 'Form/SearchMain',
  component: SearchMain,
  args: {
    label: 'Search',
    name: 'search',
    icon: <SearchIcon />,
    iconPosition: 'left',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<SearchMainProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <SearchMain {...args} />
  </div>
)
