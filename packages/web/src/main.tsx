import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './styles/theme'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)
