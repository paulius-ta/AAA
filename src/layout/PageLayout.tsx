import {ReactNode} from 'react';
import styled, {css} from 'styled-components';
import Footer from '@components/Footer/Footer.tsx';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
}

const Root = styled.div`
  ${() => css`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;
  `};
`;

const Main = styled.main`
  ${() => css``};
`;

const PageLayout = ({children}: ComponentProps) => {
  return (
    <Root>
      <Main>{children}</Main>
      <Footer />
    </Root>
  );
};

export default PageLayout;
