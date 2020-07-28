import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; // 1rem = 10px
    }

    body {
        padding-left: ${({ pageType }) => (pageType === 'login' ? 0 : '150px')};
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
        margin: 0;
    }
`;
export default GlobalStyle;
