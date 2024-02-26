import styled from 'styled-components';
import {ReactNode} from 'react';

interface ComponentProps extends CustomComponent {
  children?: ReactNode;
}

const Root = styled.div`
  max-width: 1240px;
  margin: auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
`;

const Layout = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Layout;
