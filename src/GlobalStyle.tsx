import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        width: 100%;
        height: 100%;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blanchedalmond;
    }
    
`