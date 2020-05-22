import React from 'react'
import * as S from './mode-toggler.styles'
import { ModeContext } from '../../providers'

const ModeToggler = (props) => {
    const [isOpen, setIsOpen] = React.useState(true)
    const [mode, toggleMode] = React.useContext(ModeContext)
    return (
        <S.Container isOpen={isOpen} {...props} >
            <S._BackArrowIcon 
             onClick={() => setIsOpen(!isOpen)}
             />
                {
                    mode === 'light' ? 
                    <S._SunIcon 
                        onClick={() => toggleMode()}
                    /> : <S._MoonIcon 
                        onClick={() => toggleMode()}
                    />
                }
        </S.Container>
    )
}


export default ModeToggler