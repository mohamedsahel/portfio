import React from 'react'

import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { AboutPage, HomePage } from './pages'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <AboutPage />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
