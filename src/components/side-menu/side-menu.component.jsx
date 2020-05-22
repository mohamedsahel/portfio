import React from 'react'
import * as S from './side-menu.styles'
import { useSpring } from 'react-spring'
import { ThemeContext } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { useMediaQuery } from '../../hooks'
import { Avatar } from '..'
import I from '../../assests/icons'

const SideMenu = () => {
    const { colors: {background} } = React.useContext(ThemeContext)
    const { pathname } = useLocation()
    const isExpanded = pathname === '/'
    const isSmall = useMediaQuery('(max-width: 800px)')

    const style = useSpring({
        to: isExpanded ? {
            boxShadow: `0 0 0rem 150vw gray, 0 0 0rem 150vh gray, 0 0 0rem rgba(255, 255, 255, 0.2)`
            
        } : {
            boxShadow: `0 0 0rem 0vw gray, 0 0 0rem 0vh gray, 0 0 2rem rgba(255, 255, 255, 0.2)`
        },
        config: {duration: 500}

    })


    return (
        <S.Container  >
            <Link to='/' >
                <Avatar 
                width='40px' height='40px' 
                />
            </Link>
            <S.Nav>
                <Link to='/about' ><I.AboutIcon  /></Link>
                <Link to='/projects' ><I.ProjectsIcon  /></Link>
                <Link to='/contact' ><I.ContactIcon  /></Link>
            </S.Nav>
            <S._SocialLinks vertical/>
        </S.Container>
    )
}

export default SideMenu