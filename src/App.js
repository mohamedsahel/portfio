import React from 'react'

import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { AboutPage, HomePage, ProjectsPage, ContactPage } from './pages'
import { SideMenu } from './components'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <SideMenu />
        <ContactPage />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
