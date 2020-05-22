import React from 'react'
import * as S from './page.styles'
import { useSpring } from 'react-spring'


const Page = ({children, ...props}) => {
    const style = useSpring({
        opacity: 1, 
        transform: 'scale(1)',
        from: {
            opacity: 0,
            transform: 'scale(0.5)',
        }
    })
    return <S.Container {...props} style={style} > {children} </S.Container>
}

export default Page