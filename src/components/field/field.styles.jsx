import styled, { css } from 'styled-components'

const defaultInput = css`
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid rgb(128, 128, 128);
    margin-top: 1rem;
    background: transparent;
    padding: 12px;
    font-size: 1.8rem;
    color: ${p => p.theme.colors.gray_1};
    transition: all 0.4s;

    &:focus {
        border: 1px solid ${p => p.theme.colors.white};
        color: ${p => p.theme.colors.white};
    }
`

export const Container = styled.div`
    width: 100%;
    margin-top: 4rem;
`

export const Label = styled.label`
    font-size: 1.6rem;
`

export const Input = styled.input`
    ${defaultInput}
`

export const TextArea = styled.textarea`
    ${defaultInput}
    resize: vertical;
`