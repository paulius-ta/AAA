import styled, {css} from 'styled-components';
import {ReactNode} from 'react';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
  onClick: () => void;
  w100?: boolean;
}

const Root = styled.div<{$w100?: boolean}>`
  ${({$w100}) => css`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'foreign', sans-serif;
    font-weight: normal;
    font-size: 24px;
    line-height: 125%;
    background: ${colors.primaryAction};
    color: ${colors.primaryOnAction};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    ${$w100 &&
    css`
      width: 100%;
    `}
  `};
`;
const Button = ({className, children, onClick, w100}: ComponentProps) => {
  return (
    <Root className={className} onClick={onClick} $w100={w100}>
      {children}
    </Root>
  );
};

export default Button;
