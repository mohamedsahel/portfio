import React from 'react'
import { 
  BrowserRouter as Router,
 } from 'react-router-dom'
import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { SideMenu, Routes } from './components'
import { HomePage } from './pages'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <SideMenu />
          <Routes />
        </Router>
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
