import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import ImageSlider from '@components/ImageSlider/ImageSlider.tsx';
import DescriptionBox from '@components/DescriptionBox/DescriptionBox.tsx';
import {dataDescription} from '@data/dataDescription.ts';
import IdentifierBox from '@components/IdentiferBox/IdentifierBox.tsx';
import HistoryBox from '@components/HistoryBox/HistoryBox.tsx';
import {dataHistory} from '@data/dataHistory.ts';
import BidTimerBox from '@components/BidTimerBox/BidTimerBox.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Input from '@components/ui/Input/Input.tsx';
import {dataImages} from '@data/dataImages.ts';

const Root = styled.div`
  ${() => css`
    padding: 50px 0;
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

const BidInputContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
  `};
`;

const ArtifactPage = () => {
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
            <Input placeholder={'946'} showCurrency />
            <Button w100 onClick={() => {}}>
              Make a bid
            </Button>
          </BidInputContainer>
          <HistoryBox data={dataHistory} />
          <DescriptionBox data={dataDescription} />
        </RightSideContainer>
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
