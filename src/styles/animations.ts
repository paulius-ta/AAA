import {css} from 'styled-components';

const animations = css`
  @keyframes scrolling-text {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 100px));
    }
  }
`;

export default animations;
