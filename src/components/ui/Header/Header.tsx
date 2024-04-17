import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import breakpoints from '@styles/breakpoints.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.h1`
  ${() => css`
    font-family: 'foreign-title', sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 125%;

    ${breakpoints.mobile`
      font-size: 24px;      
    `}
  `};
`;

const Header = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Header;
