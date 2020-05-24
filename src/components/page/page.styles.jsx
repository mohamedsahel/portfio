import styled from 'styled-components'
import {animated} from 'react-spring'

export const Container = styled(animated.section)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6rem;

    @media (min-width: 800px) {
        padding-left: 6rem;
        padding-top: 0rem;
    }
`