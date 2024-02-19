import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import Component from '@customTypes/Component.ts';
import {ReactNode} from 'react';

interface ComponentProps extends Component {
  children: ReactNode;
  style?: 'bold' | 'extraBold' | 'title';
  small?: boolean;
  large?: boolean;
  boxed?: boolean;
}

const Root = styled.p<{
  $style?: string;
  $small?: boolean;
  $large?: boolean;
  $boxed?: boolean;
}>`
  ${({$style, $small, $large, $boxed}) => css`
    height: fit-content;
    font-family: 'foreign', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.primaryText};

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

    ${$small && css``}

    ${$large && css``}
    
    ${$boxed &&
    css`
      color: ${colors.secondaryText};
      background: ${colors.primaryText};
      border-radius: 5px;
      padding: 0 10px;
      line-height: 150%;
    `}
  `};
`;

const Text = ({children, style, small, large, boxed}: ComponentProps) => {
  return (
    <Root $style={style} $small={small} $large={large} $boxed={boxed}>
      {children}
    </Root>
  );
};

export default Text;
