import React from 'react'
import * as S from './social-links.styles'
import I from '../../assests/icons'
import { PortfolioContext } from '../../providers'

const SocialLinks = ({...props}) => {
    const { socialLinks } = React.useContext(PortfolioContext)
    return (
        <S.Container {...props} >
            <a href={socialLinks.github} target='_blank' >
                <I.GithubIcon />
            </a>
            <a href={socialLinks.twitter} target='_blank' >
                <I.TwitterIcon />
            </a>
            <a href={socialLinks.linkedin} target='_blank' >
                <I.LinkedinIcon />
            </a>
        </S.Container>
    )
}


export default SocialLinks