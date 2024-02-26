import styled, {css} from 'styled-components';
import {ReactNode} from 'react';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.label`
  ${() => css`
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 16px;
    line-height: 20px;
  `};
`;

const Label = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Label;
