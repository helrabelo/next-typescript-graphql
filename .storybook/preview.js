import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'tcg-light',
    values: [
      {
        name: 'tcg-light',
        value: theme.colors.white
      },
      {
        name: 'tcg-dark',
        value: theme.colors.neutral.black
      }
    ]
  }
}

addDecorator(withNextRouter())
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
