import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 90%;
    max-width: 50rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        width: 2.6rem;
        height: 2.6rem;
    }

    ${p => p.vertical && css`
        flex-direction: column;
    `}
`

