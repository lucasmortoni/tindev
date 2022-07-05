import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './styles/theme'
import Dashboard from './pages/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Dashboard />
    </ChakraProvider>
  </React.StrictMode>
)
