import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: 0;
    }

    body {
        background: #010d1A;
        padding: 0 10%;
    }
`;

export default GlobalStyle;
