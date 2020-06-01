import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

  body {
    background-color: ${props =>
      props.theme.mode === 'dark'
        ? variables.darkModeBackground
        : variables.lightModeBackground};
        
    color: ${props =>
      props.theme.mode === 'dark'
        ? variables.darkModeColor
        : variables.lightModeColor};

    font-family: ${variables.fontFamily}
  }
`;

export default GlobalStyles;
