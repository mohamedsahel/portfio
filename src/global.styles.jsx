import { createGlobalStyle, keyframes } from 'styled-components'


const dash = keyframes`
   to {
      stroke-dashoffset: 0;
    }
   
`

const fill = props => keyframes`
    to {
        fill: ${props.theme.colors.text};
        stroke-width: 0;
    }
   
`

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

    svg.animated path, svg.animated circle{
      fill: transparent;
      stroke: ${p => p.theme.colors.text};
      stroke-width: 3rem; 
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      animation: ${dash} 2s ease forwards 1.6s, ${p => fill} 0.6s ease forwards 2.6s;
    }

    @media (pointer: fine) and (hover: hover) {
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

        &:active {
          background-color: ${p => p.theme.colors.gray_2};
        }

      }
    } 

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
