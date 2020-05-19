import React from 'react'
import * as S from './side-menu.styles'
import { useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../../hooks'
import { Avatar } from '..'
import I from '../../assests/icons'

const SideMenu = () => {
    const [isExpanded, setExpanded] = React.useState(false)
    const ref = React.useRef(false)
    const isSmall = useMediaQuery('(max-width: 800px)')
    const vhToPixel = value => `${(window.innerHeight * value) / 100}px`
    const vwToPixel = value => `${(window.innerWidth * value) / 100}px`

    const style = useSpring({
        to: isExpanded ? {
            width: vwToPixel(100),
            height: vhToPixel(100),
            borderRadius: '0%',
            top: '0px',
            left: '0px',
            
        } : isSmall ? {
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                left: '10px',
                top: '10px',
            } :
            {
                width: '60px',
                height: vhToPixel(100),
                borderRadius: '0%',
                top: '0px',
                left: '0px', 
            },
        onRest: () => {
            if (isExpanded && ref.current) {
                ref.current.style.height = "100vh"
                ref.current.style.width = "100vw"
            }
        }
        })

    return (
        <S.Container 
        style={style} 
        ref={ref}
        >
            <Link to='/' >
                <Avatar 
                width='40px' height='40px' 
                onClick={() => setExpanded(true)} 
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