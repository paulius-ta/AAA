import styled, {css} from 'styled-components';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import Layout from '@components/Layout/Layout.tsx';
import BidTimerBox from '@components/BidTimerBox/BidTimerBox.tsx';
import {dataDescription} from '@data/dataDescription.ts';
import IdentifierBox from '@components/IdentiferBox/IdentifierBox.tsx';
import DescriptionBox from '@components/DescriptionBox/DescriptionBox.tsx';
import ImagesBox from '@components/ImagesBox/ImagesBox.tsx';
import {dataImages} from '@data/dataImages.ts';
import WizardNavigator from '@components/WizardNavigator/WizardNavigator.tsx';
import Wizard from '@components/Wizard/Wizard.tsx';
import breakpoints from '@styles/breakpoints.ts';
import useViewport from '@utils/useViewport.ts';
import Accordion from '@components/Accordion/Accordion.tsx';
import Box from '@components/ui/Box/Box.tsx';

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
  const {isDesktop, isMobile} = useViewport();
  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <LeftSideContainer>
          <WizardNavigator />
          <Wizard />
        </LeftSideContainer>

        {isDesktop && (
          <RightSideContainer>
            <IdentifierBox identifier={dataDescription.id} />
            <BidTimerBox />
          </RightSideContainer>
        )}

        {isMobile && (
          <Box>
            <Accordion
              component={<IdentifierBox identifier={dataDescription.id} />}
              isAutoCollapsed
            >
              <RightSideContainer>
                <BidTimerBox />
                <DescriptionBox data={dataDescription} secondary />
                <ImagesBox data={dataImages} secondary />
              </RightSideContainer>
            </Accordion>
          </Box>
        )}
      </Layout>
    </Root>
  );
};

export default CheckoutPage;
