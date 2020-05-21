import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-size: 1.6rem;
    }

    * {
      font: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 58%;
        font-family: ${p => p.theme.fonts.primary};
    }

    body {
        background: ${p => p.theme.colors.background};
        color: ${p => p.theme.colors.text};
    }

    ol, ul {
      list-style: none;
    }

    button, input, textarea, select {
      margin: 0;
      outline: none;
    }

    button, a {
      cursor: pointer;
      text-decoration: none;
    }

    img, video, svg {
      max-width: 100%;
      max-height: 100%;
    }

    /* @media (pointer: fine) and (hover: hover) {
      *::-webkit-scrollbar-track {
        border-radius: 1rem;
      }

      *::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.6rem;
      }

      *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${p => p.theme.colors.gray_1};
      }

      *::-webkit-scrollbar-thumb:active {
        background-color: ${p => p.theme.colors.gray_2};
      }
    } */

    @media (min-width: 600px) {
        html {
            font-size: 60%;
        }
    }

    @media (min-width: 800px) {
        html {
            font-size: 62.7%;
        }
    }

`

export default GlobalStyles
