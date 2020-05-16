import React from 'react'
import * as S from './welcome-layer.styles'
import { useSpring, config } from 'react-spring'

const WelcomeLayer = () => {
    // const [welcome, setWelcome] = React.useState(true)

    // React.useEffect(() => {
    //     setTimeout(() => setWelcome(false), 6000)
    // }, [])

    const [isBig, setBig] = React.useState(false)

    const [props, set, stop] = useSpring(() => ({fontSize: '1.4rem'}))

    // Update spring with new props
    set({
        fontSize: isBig ? '2rem' : '1.4rem',
        config: { duration: 500, ...config.default },
    })

    return (
        // !welcome ? null :
        <S.Container
        onClick={() => setBig(s => !s)} 
        >
            <S.Fade style={props}>I will grow</S.Fade>
            {/* <S.Title>Welcome To my small world</S.Title> */}
        </S.Container>
    )
}

export default WelcomeLayer