import styled from 'styled-components';
import {ReactNode} from 'react';
import Component from '@customTypes/Component.ts';

interface ComponentProps extends Component {
  children?: ReactNode;
}

const Root = styled.div`
  max-width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: auto 456px;
  gap: 50px;
`;

const Layout = ({children}: ComponentProps) => {
  return <Root>{children}</Root>;
};

export default Layout;
