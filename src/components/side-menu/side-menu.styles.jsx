import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { SocialLinks } from '..'


export const Container = styled(animated.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 3;
    padding: 1.6rem;
    height: 6rem;
    width: 100vw;
    top: 0rem;
    left: 0rem; 
    background: ${p => p.theme.colors.background};
    box-shadow: 0 0 3rem rgba(255, 255, 255, 0.24);

    @media (min-width: 800px) {
        flex-direction: column;
        width: 6rem;
        height: 100vh;
        padding: 1rem;
        box-shadow: 0 0 2.4rem rgba(255, 255, 255, 0.12);
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
    width: 70%;

    svg {
        width: 2rem;
        height: 2rem;
        path, circle {
            fill: white;
            /* fill: transparent;
            stroke: white;
            stroke-width: 3rem;  */
        }
    }

    @media (min-width: 800px) {
        padding: 0rem;
        height: 20rem;
        flex-direction: column;
        svg {
            height: 2rem; 
            width: 2rem;
        }
    }
`

export const _SocialLinks = styled(SocialLinks)`
    display: none;
    @media (min-width: 800px) {
        display: flex;
        height: 13rem;
        padding: 1rem;
    }
`