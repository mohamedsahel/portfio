import React from 'react'

import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { HomePage } from './pages'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
