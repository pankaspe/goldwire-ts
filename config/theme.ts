// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// initial color mode config
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
}

// extend the theme
const theme = extendTheme({ config })

export default theme