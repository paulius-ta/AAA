import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import {ReactNode} from 'react';
import breakpoints from '@styles/breakpoints.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
  style?: 'bold' | 'extraBold' | 'title';
  size?: number;
  boxed?: boolean;
}

const Root = styled.p<{$style?: string; $size?: number; $boxed?: boolean}>`
  ${({$style, $size, $boxed}) => css`
    height: fit-content;
    font-family: 'foreign', sans-serif;
    font-weight: normal;
    font-size: ${$size ? $size : '16'}px;
    line-height: 125%;
    color: ${colors.primaryText};

    ${breakpoints.mobile`
      font-size: ${$size ? $size : '14'}px;
    `}

    ${$style === 'bold' &&
    css`
      font-family: 'foreign-bold', sans-serif;
      font-weight: normal;
      letter-spacing: 0.1rem;
    `}

    ${$style === 'extraBold' &&
    css`
      font-family: 'foreign-extra-bold', sans-serif;
      font-weight: normal;
      letter-spacing: 0.1rem;
    `}

    ${$style === 'title' &&
    css`
      font-family: 'foreign-title', sans-serif;
      font-weight: normal;
    `}

    ${$boxed &&
    css`
      background: ${colors.background};
      padding: 5px;
      border-radius: 5px;
    `}
  `};
`;

const Text = ({children, className, style, size, boxed}: ComponentProps) => {
  return (
    <Root className={className} $style={style} $size={size} $boxed={boxed}>
      {children}
    </Root>
  );
};

export default Text;
