import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
  padding?: number;
  secondary?: boolean;
}

const Root = styled.div<{$padding?: number; $secondary?: boolean}>`
  ${({$padding, $secondary}) => css`
    width: 100%;
    height: fit-content;
    background: ${colors.boxBackground};
    border-radius: 10px;
    padding: 20px;

    ${$padding &&
    css`
      padding: ${$padding}px;
    `}

    ${$secondary &&
    css`
      background: ${colors.background};
    `}
  `};
`;

const Box = ({className, children, padding, secondary}: ComponentProps) => {
  return (
    <Root className={className} $padding={padding} $secondary={secondary}>
      {children}
    </Root>
  );
};

export default Box;
