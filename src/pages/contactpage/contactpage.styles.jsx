import styled from 'styled-components'
import { animated } from 'react-spring'

export const Content = styled(animated.div)`
    width: 100%;
    padding: 1.6rem;
`

export const ContactHeader = styled.div`
    width: min(30rem, 100%);
    margin: auto;
    font-size: 2rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-top: 4rem;

    a {
        text-decoration: underline;
        color: ${p => p.theme.colors.gray_1};
    }

    span {
        font-size: 1.6rem;
        color: ${p => p.theme.colors.gray_2};
        margin-top: 1.6rem;
    }

    h3 {
        font-size: 2.6rem;
    }

    @media (min-width: 800px) {
        display: none;
    }
`