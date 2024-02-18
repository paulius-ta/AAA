import {createGlobalStyle, css} from 'styled-components';
import resetCSS from '@styles/reset.ts';
import colors from '@styles/colors.ts';
import fonts from '@styles/fonts.ts';
import animations from '@styles/animations.ts';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${fonts}
  ${animations}
  
  
  ${() => css`
    html {
      height: 100%;
      background: ${colors.background};
    }

    body {
      height: 100%;
      font-family: 'foreign', sans-serif;
    }
  `}
`;

export default GlobalStyle;
