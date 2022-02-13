import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import { Provider } from "react-redux"
import store from "../store/store"
import { ThemeProvider } from '@emotion/react'

import theme from '../lib/theme'

import Chakra from "../devComponents/chakra"


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
}

export default MyApp
