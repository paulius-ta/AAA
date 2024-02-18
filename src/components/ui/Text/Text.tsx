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

const Root = styled.p<{$style?: string; $small?: boolean; $large?: boolean}>`
  ${({$style}) => css`
    font-family: 'foreign', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.primaryText};

    ${$style === 'bold' &&
    css`
      font-family: 'foreign-bold', sans-serif;
    `}

    ${$style === 'extraBold' &&
    css`
      font-family: 'foreign-extra-bold', sans-serif;
    `}

    ${$style === 'title' &&
    css`
      font-family: 'foreign-title', sans-serif;
    `}

    ${$style === 'boxed' &&
    css`
      color: ${colors.secondaryText};
      background: ${colors.primaryText};
    `}
  `};
`;

const Text = ({children, style, small, large}: ComponentProps) => {
  return (
    <Root $style={style} $small={small} $large={large}>
      {children}
    </Root>
  );
};

export default Text;
