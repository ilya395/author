import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    font-weight: 400;
    font-style: normal;
  }

  html {
    margin-left: calc(100vw - 100%);
  }

  body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;