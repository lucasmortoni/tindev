import { extendTheme, Theme } from '@chakra-ui/react'

const customTheme = {
  config: {
    initialColorMode: 'system'
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto'
  }
} as Theme

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({ customTheme })
