import styled from 'styled-components'

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;

    @media (min-width: 800px) {
        padding-left: 6rem;
        padding-top: 0rem;
    }
`