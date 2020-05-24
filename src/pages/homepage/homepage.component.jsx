import React from 'react'
import * as S from './homepage.styles'
import { animated } from 'react-spring'
import { Link } from 'react-router-dom'
import { PortfolioContext } from '../../providers'
import { Page, Button } from '../../components'
import { useFadeIn } from '../../hooks'



const HomePage = ({...props}) => {
    const { name, job } = React.useContext(PortfolioContext)
    const sharedParams = [
        '6rem',
        {
            delay: 800
        }
    ]
    const styleLeft = useFadeIn('left', ...sharedParams)
    const styleRight = useFadeIn('right', ...sharedParams)
    const styleTop = useFadeIn('top', ...sharedParams)
    return (
        <Page {...props} >
            <S.Content >
                <animated.h3 style={styleTop} >Hi,</animated.h3>
                <animated.h3 style={styleRight} >I am {name}</animated.h3>
                <animated.h3 style={styleLeft} >{job}</animated.h3>
                <Link to='/contact' >
                    <Button>CONTACT ME</Button>
                </Link>
                <S._SocialLinks />
            </S.Content>
        </Page>
    )
}

export default HomePage