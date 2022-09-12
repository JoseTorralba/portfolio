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
  --white: #fff;
  --black: #000;
  --grey: #808080;
  --washed: #f2f4f8;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  /* @include respond(tablet-landscape) { font-size: 56.25%; }
  @include respond(tablet-portrait) { font-size: 50%; }
  @include respond(big-desktop) { font-size: 75%; } */
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
