import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import ImageSlider from '@components/ImageSlider/ImageSlider.tsx';
import DescriptionBox from '@components/DescriptionBox/DescriptionBox.tsx';
import {dataDescription} from '@data/dataDescription.ts';
import IdentifierBox from '@components/IdentiferBox/IdentifierBox.tsx';
import HistoryBox from '@components/HistoryBox/HistoryBox.tsx';
import BidTimerBox from '@components/BidTimerBox/BidTimerBox.tsx';
import Button from '@components/ui/Button/Button.tsx';
import {dataImages} from '@data/dataImages.ts';
import {useNavigate} from 'react-router-dom';
import routerPaths from '@config/routerPaths.ts';
import breakpoints from '@styles/breakpoints.ts';
import useArtifactPage from '@hooks/useArtifactPage.ts';
import Loading from '@components/Loading/Loading.tsx';

const Root = styled.div`
  ${() => css`
    padding: 50px 0;
    width: 100%;
    height: 100%;

    ${breakpoints.mobile`
      padding: 10px 0;
    `}
  `};
`;

const StyledScrollingText = styled(ScrollingText)`
  ${() => css`
    margin-bottom: 70px;

    ${breakpoints.mobile`
      margin-bottom: 20px;
    `}
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

const BidInputContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
  `};
`;

const ArtifactPage = () => {
  const {descriptionData, historyData, isLoading, isError} = useArtifactPage();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate({pathname: routerPaths.checkout()});
  };

  if (isLoading) return <Loading />;
  if (isError || !descriptionData || !historyData) return <div> Error</div>;

  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <LeftSideContainer>
          <IdentifierBox identifier={dataDescription.id} />
          <ImageSlider images={dataImages.images} />
        </LeftSideContainer>
        <RightSideContainer>
          <BidTimerBox />
          <BidInputContainer>
            <Button w100 onClick={handleClick}>
              Make a bid
            </Button>
          </BidInputContainer>
          <HistoryBox data={historyData} />
          <DescriptionBox data={descriptionData?.details} />
        </RightSideContainer>
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
