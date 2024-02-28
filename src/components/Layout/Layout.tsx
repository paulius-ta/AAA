import styled from 'styled-components';
import {ReactNode} from 'react';

interface ComponentProps extends CustomComponent {
  children?: ReactNode;
}

const Root = styled.div`
  box-sizing: border-box;
  max-width: 1240px;
  margin: auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 80px;
`;

const Layout = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Layout;
