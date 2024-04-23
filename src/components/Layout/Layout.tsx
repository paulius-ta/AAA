import styled from 'styled-components';
import {ReactNode} from 'react';
import breakpoints from '@styles/breakpoints.ts';

interface ComponentProps extends CustomComponent {
  children?: ReactNode;
}

const Root = styled.div`
  max-width: 1240px;
  margin: auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 80px;

  ${breakpoints.mobile`
    grid-template-columns: 1fr;
    gap: 10px;
  `}
`;

const Layout = ({className, children}: ComponentProps) => {
  return <Root className={className}>{children}</Root>;
};

export default Layout;
