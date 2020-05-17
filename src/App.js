import React from 'react'

import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { AboutPage, HomePage, ProjectsPage, ContactPage } from './pages'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <ContactPage />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
