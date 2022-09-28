import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    --primary: #e3ccb6;
    --primary-light: #FDF1E2;
    --white: #fff;
    --black: #000;
    --grey: #808080;
    --light-grey: #363636;
    --washed: #f2f4f8;

  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (min-width: 112.5em) {
      font-size: 75%;
    }

    @media only screen and (max-width: 75em) {
      font-size: 56.25%;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }
  }

  body {
    background: #f2f4f8;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }

`;

export default GlobalStyles;
