import {createElement, FunctionComponent} from 'react';
import styled, {css} from 'styled-components';
import breakpoints from '@styles/breakpoints.ts';

interface ComponentProps extends CustomComponent {
  icon: FunctionComponent<SimpleObject>;
  size?: number;
}

const Root = styled(({icon, className, size}: ComponentProps) =>
  createElement(icon, {className, size})
)`
  ${({size}) => css`
    flex-shrink: 0;
    width: ${size ? size : '20'}px;
    min-width: ${size ? size : '20'}px;
    height: ${size ? size : '20'}px;

    // ${breakpoints.mobile`
    //   width: ${size ? size : '16'}px;
    //   min-width: ${size ? size : '16'}px;
    //   height: ${size ? size : '16'}px;
    // `}
  `}
`;

const Icon = ({icon, className, size}: ComponentProps) => {
  return <Root icon={icon} className={className} size={size} />;
};

export default Icon;
