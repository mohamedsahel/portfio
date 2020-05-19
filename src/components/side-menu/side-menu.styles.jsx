import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { SocialLinks } from '..'


export const Container = styled(animated.div)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${p => p.theme.colors.background};
    z-index: 3;
    padding: 1rem;
    box-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.15);
    overflow: hidden;

    img {
        margin-bottom: 1rem;
    }
`

export const Nav = styled.div`
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
    height: 13rem;
    padding: 1rem;
`