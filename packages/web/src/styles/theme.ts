import { extendTheme, Theme } from '@chakra-ui/react'

const customTheme = {
  config: {
    initialColorMode: 'system'
  }
} as Theme

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({ customTheme })
