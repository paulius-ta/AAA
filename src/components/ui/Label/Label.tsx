import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.div`
  ${() => css`
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 12px;
    line-height: 125%;
    color: ${colors.neutral};
  `};
`;

const Label = ({children, className}: ComponentProps) => {
  return <Root className={className}>{children}</Root>;
};

export default Label;
