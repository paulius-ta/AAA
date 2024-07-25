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
        min-height: calc(100vh + 200px);
        font-family: 'foreign', sans-serif;
        background-size: 30px 30px;
        background-image: radial-gradient(
          circle,
          ${colors.grid} 1px,
          rgba(0, 0, 0, 0) 1px
        );

        #root {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        * {
          box-sizing: border-box;
        }
      }
    `}
    
    .display-none {
        display: none;
    }
`;

export default GlobalStyle;
