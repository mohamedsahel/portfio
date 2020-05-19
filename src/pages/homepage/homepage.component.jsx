import React from 'react'
import * as S from './homepage.styles'
import { PortfolioContext } from '../../providers'
import { SocialLinks, Avatar } from '../../components'


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
            <S.MenuItem>ABOUT</S.MenuItem>
            <S.MenuItem>PROJECTS</S.MenuItem>
            <S.MenuItem>CONTACT</S.MenuItem>
        </S.Menu>
    )
}


const HomePage = ({...props}) => {
    return (
        <S.Container {...props} >
            <S.Content>
                <Header />
                <Menu />
                <SocialLinks />
            </S.Content>
        </S.Container>
    )
}

export default HomePage