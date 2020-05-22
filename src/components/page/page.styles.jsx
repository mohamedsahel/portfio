import styled from 'styled-components'
import {animated} from 'react-spring'

export const Container = styled(animated.section)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    @media (min-width: 800px) {
        margin-left: 6rem;
        margin-top: 0rem;
    }
`