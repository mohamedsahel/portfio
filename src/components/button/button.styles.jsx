import styled from 'styled-components'
import { animated } from 'react-spring'


export const Button = styled.button`
    padding: 1.6rem 2rem 1.6rem 2rem;
    display: inline-block;
    background: ${p => p.theme.colors.white};
    border-radius: 6px;
    border: none;
    position: relative;
    overflow: hidden;

    &:hover {
        background: ${p => p.theme.colors.gray_1};
    }
`

export const Ripple = styled(animated.span)`
    position: absolute;
    background: rgb(128, 128, 128);
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    opacity: 0.5;
`