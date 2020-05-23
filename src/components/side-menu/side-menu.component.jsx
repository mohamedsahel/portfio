import React from 'react'
import * as S from './side-menu.styles'
import { useSpring } from 'react-spring'
import { useMediaQuery } from '../../hooks'
import { Link, useLocation } from 'react-router-dom'
import { Avatar } from '..'
import I from '../../assests/icons'

const SideMenu = () => {
    const isLarg = useMediaQuery('(min-width: 800px)')
    const style = useSpring({
        transform: isLarg ? 'translateX(0rem)' : 'translateY(0rem)',
        from: {
            transform: isLarg ? 'translateX(-6rem)' : 'translateY(-6rem)',
        },
        delay: 800,
    })
    return (
        <S.Container style={style} >
            <Link to='/' >
                <Avatar 
                width='40px' height='40px' 
                />
            </Link>
            <S.Nav>
                <Link to='/about' ><I.AboutIcon 
                className='animated' /></Link>
                <Link to='/projects' ><I.ProjectsIcon className='animated'  /></Link>
                <Link to='/contact' ><I.ContactIcon className='animated'  /></Link>
            </S.Nav>
            <S._SocialLinks vertical/>
        </S.Container>
    )
}

export default SideMenu