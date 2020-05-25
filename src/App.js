import React from 'react'
import { 
  BrowserRouter as Router,
 } from 'react-router-dom'
import GlobalStyles from './global.styles'
import { ModeProvider, ThemeProvider, PortfolioProvider } from './providers'
import { ModeToggler, SideMenu, Routes, Particles } from './components'

const App = () => {
  return (
    <PortfolioProvider>
      <ModeProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Particles />
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
