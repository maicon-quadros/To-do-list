import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
    }

    * {
        font-family: "Roboto", sans-serif;
    }
`


export default GlobalStyle