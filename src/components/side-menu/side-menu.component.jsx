import React from 'react'
import * as S from './side-menu.styles'
import { Link, useLocation } from 'react-router-dom'
import { Avatar } from '..'
import I from '../../assests/icons'

const SideMenu = () => {
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