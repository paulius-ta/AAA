import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
  padding?: number;
}

const Root = styled.div<{$padding?: number}>`
  ${({$padding}) => css`
    width: 100%;
    height: fit-content;
    background: ${colors.boxBackground};
    border-radius: 10px;
    padding: 20px;

    ${$padding &&
    css`
      padding: ${$padding}px;
    `}
  `};
`;

const Box = ({className, children, padding}: ComponentProps) => {
  return (
    <Root className={className} $padding={padding}>
      {children}{' '}
    </Root>
  );
};

export default Box;
