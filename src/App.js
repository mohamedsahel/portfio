import React from 'react'

import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { AboutPage, HomePage, ProjectsPage } from './pages'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <ProjectsPage />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
