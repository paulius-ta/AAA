import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import breakpoints from '@styles/breakpoints.ts';
interface ComponentProps extends CustomComponent {
  children: ReactNode;
  type?: string;
}

const Root = styled.p<{$type?: string}>`
  ${({$type}) => css`
    display: flex;
    align-items: center;
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    letter-spacing: 5px;
    font-size: 16px;
    line-height: 150%;
    border-radius: 5px;
    padding: 0 10px;
    background: ${$type};

    ${breakpoints.mobile`
      font-size: 14px;
    `}
  `};
`;

const Attribute = ({children, className, type}: ComponentProps) => {
  return (
    <Root className={className} $type={type}>
      {children}
    </Root>
  );
};

export default Attribute;
