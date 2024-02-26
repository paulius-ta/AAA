import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import {ReactNode} from 'react';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.div`
  ${() => css`
    color: ${colors.error};
    font-size: 14px;
    padding-top: 4px;
  `};
`;

const ErrorText = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default ErrorText;
