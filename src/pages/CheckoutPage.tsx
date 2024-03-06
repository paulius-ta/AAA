import styled, {css} from 'styled-components';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import Layout from '@components/Layout/Layout.tsx';
import BidTimerBox from '@components/BidTimerBox/BidTimerBox.tsx';
import {dataDescription} from '@data/dataDescription.ts';
import IdentifierBox from '@components/IdentiferBox/IdentifierBox.tsx';
import DescriptionBox from '@components/DescriptionBox/DescriptionBox.tsx';

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

const CheckoutPage = () => {
  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <LeftSideContainer></LeftSideContainer>
        <RightSideContainer>
          <IdentifierBox identifier={dataDescription.id} />
          <BidTimerBox />
          <DescriptionBox data={dataDescription} />
        </RightSideContainer>
      </Layout>
    </Root>
  );
};

export default CheckoutPage;
