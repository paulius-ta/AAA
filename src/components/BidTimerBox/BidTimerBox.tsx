import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconStar} from '@assets/AssetsProvider.ts';
import Text from '@components/ui/Text/Text.tsx';
import Timer from '@components/Timer/Timer.tsx';
import Separator from '@components/ui/Separator/Separator.tsx';
import colors from '@styles/colors.ts';
import useDateTimeFormatter from '@utils/useDateTimeFormatter.ts';
import breakpoints from '@styles/breakpoints.ts';
import useViewport from '@utils/useViewport.ts';

interface ComponentProps extends CustomComponent {
  secondary?: boolean;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${breakpoints.mobile`
      flex-direction: column-reverse;
      gap: 10px;
    `}
  `};
`;

const LeftContainer = styled.div`
  ${() => css`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    ${breakpoints.mobile`
      width: 100%;
    `}
  `};
`;

const RightContainer = styled.div`
  ${() => css`
    width: 50%;
    height: 100%;

    ${breakpoints.mobile`
      width: 100%;
    `}
  `};
`;

const Currency = styled.span`
  ${() => css`
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: ${colors.neutral};

    ${breakpoints.mobile`
      font-size: 12px;
    `}
  `};
`;

const TextWrapper = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.background};
    padding: 5px;
    border-radius: 5px;
  `};
`;

const BidTimerBox = ({secondary}: ComponentProps) => {
  const {getTimestamp} = useDateTimeFormatter();
  const {isDesktop} = useViewport();

  return (
    <Root secondary={secondary}>
      <Row>
        <LeftContainer>
          <Icon icon={iconStar} />
          <TextWrapper>
            <Text>
              946 <Currency>eur</Currency>
            </Text>
          </TextWrapper>
        </LeftContainer>
        {isDesktop && <Separator vertical space={20} />}
        <RightContainer>
          <Timer endTime={getTimestamp()} />
        </RightContainer>
      </Row>
    </Root>
  );
};

export default BidTimerBox;
