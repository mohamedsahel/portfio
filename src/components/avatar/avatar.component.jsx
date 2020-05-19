import React from 'react'
import * as S from './avatar.styles'
import { PortfolioContext } from '../../providers'


const Avatar = ({height, width, ...props}) => {
    const { image } = React.useContext(PortfolioContext)
    return (
        <S.Image src={image} style={{width: width, height: height}} {...props} />
    )
}

export default Avatar