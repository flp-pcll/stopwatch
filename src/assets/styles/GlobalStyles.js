import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #000;
        color: #fff;

        line-height: 1.5;
        font-size: 18px;
        font-weight: 100;

        height: 100vh;
    }

    input, button {
        outline: none;
        border: none;
        font: inherit;
        background-color: #000;
        color: #fff;
    }

    h1, h2, h3, h4, h5, h6 {
        font: inherit;
    }

    ul, ol, li {
        list-style: none;
    }
`;

export default GlobalStyle;