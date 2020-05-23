import React from 'react'
import * as S from './page.styles'


const Page = ({children, ...props}) => {
    return <S.Container {...props} > {children} </S.Container>
}

export default Page