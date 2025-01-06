import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;