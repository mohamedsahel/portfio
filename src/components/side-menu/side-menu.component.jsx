import React from 'react'
import * as S from './side-menu.styles'
import { useSpring } from 'react-spring'
import { useMediaQuery } from '../../hooks'
import { Avatar } from '..'

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
            bottom: '0px',
            left: '0px',
            
        } : isSmall ? {
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                left: '20px',
                bottom: '20px',
            } :
            {
                width: '50px',
                height: vhToPixel(100),
                borderRadius: '0%',
                bottom: '0px',
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
        onClick={() => setExpanded(true)} 
        >
            <Avatar width='50px' height='50px' />
        </S.Container>
    )
}

export default SideMenu