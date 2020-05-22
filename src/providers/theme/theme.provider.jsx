import React from 'react'
import { ModeContext } from '..'
import { ThemeProvider as Theme } from 'styled-components'
import { DARK_THEME, LIGHT_THEME } from '../../data/theme.data'


const ThemeProvider = ({children}) => {
    const [mode] = React.useContext(ModeContext)
    return (
        <Theme theme={mode === 'dark' ? DARK_THEME : LIGHT_THEME} > {children} </Theme>
    )
}


export default ThemeProvider