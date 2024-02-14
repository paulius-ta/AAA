import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';

const Root = styled.div``;

const StyledScrollingText = styled(ScrollingText)`
  ${() => css`
    margin-top: 50px;
    margin-bottom: 70px;
  `};
`;

const Box1 = styled.div`
  ${() => css`
    height: 700px;
    width: 100%;
    background: #f8e1b3;
  `};
`;

const Box2 = styled.div`
  ${() => css`
    height: 700px;
    width: 100%;
    background: #f8e1b3;
  `};
`;

const ArtifactPage = () => {
  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <Box1 />
        <Box2 />
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
