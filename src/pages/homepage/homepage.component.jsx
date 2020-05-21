import React from 'react'
import * as S from './homepage.styles'
import { useLocation } from 'react-router-dom'
import { useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import { PortfolioContext } from '../../providers'
import { SocialLinks, Avatar, Page } from '../../components'


const Header = ({...props}) => {
    const { name, job } = React.useContext(PortfolioContext)
    return (
        <S.Header {...props} >
            <Avatar width='10rem' height='10rem' />
            <S.Name> {name} </S.Name>
            <S.Job> {job} </S.Job>
        </S.Header>
    )
}


const Menu = ({...props}) => {
    return (
        <S.Menu {...props} >
            <S.MenuItem>
                <Link to='/about'>
                    ABOUT
                </Link>
            </S.MenuItem>
            <S.MenuItem>
                <Link to='/projects'>
                    PROJECTS
                </Link>
            </S.MenuItem>
            <S.MenuItem>
                <Link to='/contact'>
                    CONTACT
                </Link>
            </S.MenuItem>
        </S.Menu>
    )
}


const HomePage = ({...props}) => {
    return (
        <Page {...props} >
            <S.Content>
                <Header />
                <Menu />
                <SocialLinks />
            </S.Content>
            
        </Page>
    )
}

export default HomePage