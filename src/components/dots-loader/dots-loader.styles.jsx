import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 4rem;
`

export const Dot = styled(animated.span)`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.8);
    position: relative;
`