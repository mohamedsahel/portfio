import React from 'react'
import * as S from './particles.styles'
import { ThemeContext } from 'styled-components'
import { useWindowSize } from '../../hooks'

const Particles = () => {
    const { width } = useWindowSize()
    const { colors } = React.useContext(ThemeContext)
    const params = {
        "particles": {
            "number": {
                "value": width / 20
            },
            "size": {
                "value": 2
            },
            "color": {
                "value": colors.text
            },
            "line_linked": {
                "opacity": width > 800 ? 0.1 : 0.4,
                "color": colors.text
            },
            "opacity": {
                "anim": {
                    "speed": 1,
                }
            },
        },
    }

    return <S._Particles params={params} />
}

export default Particles