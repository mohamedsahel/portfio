import styled, {css} from 'styled-components'
import { animated } from 'react-spring'

export const Content = styled(animated.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem auto;
    max-width: 60rem;
    font-family: ${p => p.theme.fonts.code};
    font-size: 2.6rem;

    header {
        display: flex;
        width: 28rem;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;
        font-weight: 400;
    }

    footer {
        align-self: flex-start;
        margin-top: 2rem;
    }

`

export const Properties = styled.div`
    width: 88%;
    > * {
        margin: auto;
    }
`


const variableValue = css`
    font-size: 2.2rem;
    font-weight: 300;
    color: ${p => p.theme.colors.gray_1};
    line-height: 3.2rem;
`

export const Variable = styled.div`
    display: flex;
    margin-bottom: 2rem;

    > *:last-child {
        ${variableValue}
    }

    > *:first-child {
        font-size: 2.4rem;
        font-weight: 400;
        display: inline-flex;
        justify-content: space-between;
        white-space: nowrap;

        span {
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
`

export const ArrayItem = styled.div`
    ${variableValue}
    margin: auto auto 2.2rem 2rem;
`