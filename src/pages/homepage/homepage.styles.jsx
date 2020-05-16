import styled from 'styled-components'

export const Container = styled.section`
    min-width: 100vw;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 90rem;
    margin: auto;
    padding: 2rem;

`

export const Header = styled.div.attrs({
    className: 'center'
})`
    flex-direction: column;
`


export const Image = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    user-select: none;
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

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

export const MenuItem = styled.li`
    font-size: 3rem;
`

export const Social = styled.div`
    width: 90%;
    max-width: 50rem;
    display: flex;
    justify-content: space-between;

    svg {
        width: 2.6rem;
        height: 2.6rem;
    }
`

