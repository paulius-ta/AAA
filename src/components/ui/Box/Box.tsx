import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.div`
  ${() => css`
    width: 100%;
    height: fit-content;
    background: ${colors.boxBackground};
    border-radius: 10px;
    padding: 30px;
  `};
`;

const Box = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Box;
