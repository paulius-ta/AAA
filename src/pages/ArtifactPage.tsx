import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import ImageSlider from '@components/ImageSlider/ImageSlider.tsx';

const Root = styled.div`
  width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const StyledScrollingText = styled(ScrollingText)`
  ${() => css`
    max-height: 100%;
    max-width: 100%;
    margin-top: 50px;
    margin-bottom: 70px;
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
  const images = [
    {url: '/src/assets/images/artifact-1.png'},
    {url: '/src/assets/images/artifact-2.png'},
  ];

  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <ImageSlider images={images} />
        <Box2 />
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
