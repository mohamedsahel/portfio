import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    width: 100%;
    height: 42rem;
    max-width: 50rem;
    text-align: center;
    margin: auto;
    margin-bottom: 12rem;

    @media (min-width: 800px) {
        flex-direction: row;
        max-width: 80rem;
        font-size: 1.6rem;
        text-align: left;
        height: 30rem;
    }
`

export const Images = styled.div`
    position: relative;
    width: min(100%, 40rem);
    height: 50%;

    @media (min-width: 800px) {
        width: 80%;
        height: 100%;
        margin-right: 3rem;
    }
`

export const Image = styled.img`
    width: 80%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;

    &:first-child {
        top: 24%;
        left: 20%;
        z-index: 1;
    }

`

export const Details = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;

    > * {
        margin-top: 2rem;
    }

    @media (min-width: 800px) {
        margin-top: 0;
        height: 80%;
    }
`

export const Title = styled.h1`
    width: 100%;
    font-size: 2.6rem;
`

export const Description = styled.p`
    font-weight: 300;
    color: ${p => p.theme.colors.gray_1};
    line-height: 2rem;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;

    a {
        color: ${p => p.theme.colors.white};
    }

    a:first-child {
        margin-right: 1.6rem;
    }

    @media (min-width: 800px) {
        width: 100%;
    }
`