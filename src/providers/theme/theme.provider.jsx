import React from 'react'
import { ThemeProvider as Theme } from 'styled-components'
import themeData from '../../data/theme.data'


const ThemeProvider = ({children}) => <Theme theme={themeData} > {children} </Theme>


export default ThemeProvider