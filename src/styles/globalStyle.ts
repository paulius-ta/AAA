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
      background: ${colors.background};
    }

    body {
      background: ${colors.background};
      font-family: 'foreign', sans-serif;
    }

    height: 100%;
    width: 100%;
  `}
`;

export default GlobalStyle;
