import React from 'react'
import * as S from './page.styles'
import { useSpring } from 'react-spring'


const Page = ({children, ...props}) => {
    // const style = useSpring({
    //     opacity: 1, 
    //     transform: 'translateY(0)',
    //     from: {
    //         opacity: 0,
    //         transform: 'translateY(5rem)',
    //     }
    // })
    return <S.Container {...props} > {children} </S.Container>
}

export default Page