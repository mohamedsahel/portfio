import styled, { keyframes } from 'styled-components'
import { animated } from 'react-spring'

const fade = keyframes`
    0% {
        transform: translateY(0.8rem);
    }
    20%, 80%  {
        transform: translateY(0rem);
        opacity: 1;
    }
    100%  {
        transform: translateY(0.8rem);
    }
`

export const Fade = styled(animated.h4)`
    font-weight: 300;
    font-size: min(6vw, 1.6rem);
    color: white;
`

export const Title = styled.h4`
    opacity: 0;
    font-weight: 300;
    font-size: min(6vw, 1.6rem);
    color: white;
    white-space: nowrap;
    backface-visibility: hidden;
    animation: ${fade} 5s ease-in-out 1s;
`

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
