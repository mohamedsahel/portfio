import React from 'react'
import * as S from './homepage.styles'
import { PortfolioContext } from '../../providers'
import { default as I } from '../../assests/icons'


const Header = ({...props}) => {
    const { image, name, job } = React.useContext(PortfolioContext)
    return (
        <S.Header {...props} >
            <S.Image src={image} />
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

const Social = ({...props}) => {
    const { socialLinks } = React.useContext(PortfolioContext)
    return (
        <S.Social {...props} >
            <a href={socialLinks.github} target='_blank' >
                <I.GithubIcon />
            </a>
            <a href={socialLinks.twitter} target='_blank' >
                <I.TwitterIcon />
            </a>
            <a href={socialLinks.linkedin} target='_blank' >
                <I.LinkedinIcon />
            </a>
        </S.Social>
    )
}

const HomePage = ({...props}) => {
    return (
        <S.Container {...props} >
            <S.Content>
                <Header />
                <Menu />
                <Social />
            </S.Content>
        </S.Container>
    )
}

export default HomePage