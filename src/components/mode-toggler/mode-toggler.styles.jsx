import styled, { css } from 'styled-components'

import I from '../../assests/icons'

export const _BackArrowIcon = styled(I.BackArrowIcon)`
    margin: auto 1.8rem auto 0.8rem;
    width: 1.8rem;
    height: 1.8rem;

    path {
        fill: ${p => p.theme.colors.text}
    }
`

export const _SunIcon = styled(I.SunIcon)`
    width: 3rem;
`

export const _MoonIcon = styled(I.MoonIcon)`
    width: 3rem;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 11rem;
    height: 4rem;
    box-shadow: 0 0 2rem ${p => p.theme.colors.shadow_1};
    border-radius: 4rem;
    position: fixed;
    top: 8rem;
    right: 0rem;
    margin-right: -7.7rem;
    background: ${p => p.theme.colors.background};
    z-index: 5;
    transition: margin 0.4s;

    @media (min-width: 800px) {
        top: 2rem;
    }

    @media (pointer: fine) and (hover: hover) {
        cursor: pointer;
    }
    

    ${p => p.isOpen && css`
        margin-right: -2rem;

        ${_BackArrowIcon} {
            transform: rotate(180deg)
        }
    `}
`