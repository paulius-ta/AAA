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
        min-height: 100vh;
        background: ${colors.background};
      }

      body {
        min-height: 100vh;
        font-family: 'foreign', sans-serif;
        background-size: 30px 30px;
        background-image: radial-gradient(
          circle,
          ${colors.grid} 1px,
          rgba(0, 0, 0, 0) 1px
        );

        * {
          box-sizing: border-box;
        }
      }
    `}
`;

export default GlobalStyle;
