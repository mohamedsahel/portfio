import React from 'react'
import { 
  BrowserRouter as Router,
 } from 'react-router-dom'
import GlobalStyles from './global.styles'
import { ModeProvider, ThemeProvider, PortfolioProvider } from './providers'
import { ModeToggler, SideMenu, Routes } from './components'

const App = () => {
  return (
    <PortfolioProvider>
      <ModeProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <SideMenu />
          <Routes />
        </Router>
        <ModeToggler />
      </ThemeProvider>
      </ModeProvider>
    </PortfolioProvider>
  )
}

export default App
