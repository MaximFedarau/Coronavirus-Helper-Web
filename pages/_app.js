import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import { Provider } from "react-redux"
import store from "../store/store"
import { ThemeProvider } from '@emotion/react'

import theme from '../lib/theme'

import Chakra from "../devComponents/chakra"


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
  </Chakra>
  </Provider>
}

export default MyApp
