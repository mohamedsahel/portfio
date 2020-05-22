import React from 'react'
import { 
    Switch,
    Route,
    useLocation,
   } from 'react-router-dom'
import { AboutPage, HomePage, ProjectsPage, ContactPage } from '../..//pages'


const Routes = () => {
    const location = useLocation()
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <Switch >
            <Route exact path='/' ><HomePage className='page' /></Route>
            <Route path='/about' ><AboutPage className='page' /></Route>
            <Route path='/Projects' ><ProjectsPage className='page' /></Route>
            <Route path='/contact' ><ContactPage className='page' /></Route>
        </Switch>
    )
}

export default Routes