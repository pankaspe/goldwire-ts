// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// initial color mode config
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

// extend the theme
const theme = extendTheme({ config, styles })

export default theme