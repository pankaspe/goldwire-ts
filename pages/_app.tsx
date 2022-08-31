import type { AppProps } from 'next/app'

// import chakra UI lib
import { ChakraProvider } from '@chakra-ui/react'

// import custom  theme config
import theme from "../config/theme"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
