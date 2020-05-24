import styled from 'styled-components'
import { animated } from 'react-spring'
import { SocialLinks } from '../../components'


export const Content = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    width: 100%;
    max-width: 80rem;
    padding: 2rem;

    h3 {
        font-size: 3.4rem;
        font-weight: 600;
        margin-top: 3rem;
        text-align: center;
    }


    button {
        font-size: 1.6rem;
        font-weight: 500;
        margin-top: 4rem;
    }


    @media (min-width: 800px) {
        h3 {
            font-size: 5rem;
            font-weight: 600;
        }
    }

`


export const _SocialLinks = styled(SocialLinks)`
    position: absolute;
    bottom: 2rem;


    @media (min-width: 800px) {
        display: none;
    }
`
