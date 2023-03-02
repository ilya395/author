import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    font-weight: 400;
    font-style: normal;
  }

  html, body {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    margin: 0;
    padding: 0;

    scroll-behavior: smooth;

    font-family: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;