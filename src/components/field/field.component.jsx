import React from 'react'
import * as S from './field.styles'

const Field = ({label, ...props}) => {
    return (
        <S.Container>
            <S.Label> {label} </S.Label>
            {
                props.type === 'textArea' ?
                <S.TextArea rows='4' />
                : <S.Input {...props} />
            }
            
        </S.Container>
    )
}

export default Field