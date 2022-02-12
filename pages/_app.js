import { ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/react'
import '../styles/globals.css'

import { Provider } from "react-redux"
import store from "../store/store"
import { ThemeProvider } from '@emotion/react'


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
}

export default MyApp
