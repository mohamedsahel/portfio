import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { SocialLinks } from '..'


export const Container = styled(animated.div)`
    position: fixed;
    z-index: 3;
    padding: 1rem;
    width: 6rem;
    height: 100vh;
    top: 0rem;
    left: 0rem; 
    background: ${p => p.theme.colors.background};
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);
`

export const Navigation = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const Nav = styled.div`
    display: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
    height: 20rem;


    svg {
        height: 2rem;
        path, circle {
            fill: white;
            /* fill: transparent;
            stroke: white;
            stroke-width: 3rem;  */
        }
    }
    
`

export const _SocialLinks = styled(SocialLinks)`
    display: none;
    display: flex;
    height: 13rem;
    padding: 1rem;

`