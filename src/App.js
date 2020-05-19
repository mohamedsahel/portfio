import React from 'react'
import { 
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'
import GlobalStyles from './global.styles'
import { ThemeProvider, PortfolioProvider } from './providers'
import { AboutPage, HomePage, ProjectsPage, ContactPage } from './pages'
import { SideMenu } from './components'

const App = () => {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <SideMenu />
          <Route exact path='/' ><HomePage /></Route>
          <Route path='/about' ><AboutPage className='page' /></Route>
          <Route path='/Projects' ><ProjectsPage className='page' /></Route>
          <Route path='/contact' ><ContactPage className='page' /></Route>
        </Router>
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default App
