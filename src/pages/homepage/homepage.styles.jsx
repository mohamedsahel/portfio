import styled from 'styled-components'
import { animated } from 'react-spring'

export const Content = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 90rem;
    padding: 2rem;

    @media (min-width: 800px) {
        padding: 10vh 4rem 10vh 4rem;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h2`
    font-size: 4rem;
    font-weight: 400;
    margin-top: 0.6rem;
`

export const Job = styled.h4`
    font-size: 2rem;
    font-family: ${p => p.theme.fonts.handWriting};
    font-weight: 400;
    margin-top: 0.4rem;
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40%;

    a {
        color: ${p => p.theme.colors.text};
    }

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

export const MenuItem = styled.li`
    font-size: 3rem;
`
