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

    --icon: #e3ccb6;
    --gray: #363636;
    --main-btn: #e3ccb6;
    --heading: #363636;
    --project-bg: #fff;
    --accent: #fff;
    --text: #363636;
    --project-btn: #363636;
    --about-bg: #363636;
    --skills-bg: #FDF1E2;
    --skills-box: #fff;
  }

  [data-theme='dark'] {
    --heading: #fff;
    --project-bg: #222;
    --accent: #363636;
    --text: #fff;
    --project-btn: #222;
    --skills-bg: #222;
    --skills-box: #363636;
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
    font-family: 'Roboto', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background-color : var(--primary);
    color : #363636;
  }

`;

export default GlobalStyles;
