import {css} from 'styled-components';

type CSSArgs = Parameters<typeof css>;
type CSSReturn = ReturnType<typeof css>;

export const size = {
  mobile: 1179,
  desktop: 1180,
};

const device = {
  mobile: `${size.mobile}px`,
  desktop: `${size.desktop}px`,
};

const breakpoints = {
  mobile: (...args: CSSArgs): CSSReturn => css`
    @media (max-width: ${device.mobile}) {
      ${css(...args)}
    }
  `,

  desktop: (...args: CSSArgs): CSSReturn => css`
    @media (min-width: ${device.desktop}) {
      ${css(...args)}
    }
  `,
};

export default breakpoints;
