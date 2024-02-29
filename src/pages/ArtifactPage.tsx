import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import ImageSlider from '@components/ImageSlider/ImageSlider.tsx';
import DescriptionBox from '@components/DescriptionBox/DescriptionBox.tsx';
import {dataDescription} from '@data/dataDescription.ts';
import IdentifierBox from '@components/IdentiferBox/IdentifierBox.tsx';
import HistoryBox from '@components/HistoryBox/HistoryBox.tsx';
import {dataHistory} from '@data/dataHistory.ts';

const Root = styled.div`
  ${() => css`
    padding-top: 50px;
    width: 100%;
    height: 100%;
  `};
`;

const StyledScrollingText = styled(ScrollingText)`
  ${() => css`
    margin-bottom: 70px;
  `};
`;

const LeftSideContainer = styled.div`
  ${() => css`
    min-width: 0; // TODO: solve why image slider goes crazy without this
    display: flex;
    flex-direction: column;
    gap: 10px;
  `};
`;

const RightSideContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
        <LeftSideContainer>
          <IdentifierBox identifier={dataDescription.id} />
          <ImageSlider images={images} />
        </LeftSideContainer>

        <RightSideContainer>
          <HistoryBox data={dataHistory} />
          <DescriptionBox data={dataDescription} />
        </RightSideContainer>
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
