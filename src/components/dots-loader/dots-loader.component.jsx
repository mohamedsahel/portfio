import React from 'react'
import * as S from './dots-loader.styles'
import { useSpring } from 'react-spring'

const DotsLoader = () => {
    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 800 },
        reset: true,
      })   

    const maxSin = x => Math.max(Math.sin(x), 0)
    const range = [0, 1, 2]
    const interp = i => r => `translate3d(0, -${maxSin(r + 0.2 * (i * Math.PI), 0)}rem, 0)`

    return (
        <S.Container>
            {
                range.map(item => <S.Dot key={item} style={{ transform: radians.interpolate(interp(item)) }}/>)
            }
        </S.Container>
    )
}

export default DotsLoader