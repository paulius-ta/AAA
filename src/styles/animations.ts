import {css} from 'styled-components';

const animations = css`
  @keyframes scrolling-text {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-2000%);
    }
  }
`;

export default animations;
