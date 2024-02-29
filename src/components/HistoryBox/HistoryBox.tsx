import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import useExtendableContent from '@hooks/useExtendableContent.ts';
import {iconChevronDown, iconHistory} from '@assets/AssetsProvider.ts';
import {History} from '@customTypes/model/apiTypes.ts';
import Text from '@components/ui/Text/Text.tsx';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  data: History;
}

const Root = styled(Box)``;

const TopContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-content: center;
  `};
`;

const BottomContainer = styled.div<{$isOpen: boolean}>`
  ${({$isOpen}) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    ${!$isOpen &&
    css`
      max-height: 0;
      overflow: hidden;
      margin-top: 0;
    `}
  `};
`;

const Row = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  `};
`;

const IconWrapper = styled.div`
  ${() => css`
    cursor: pointer;
  `};
`;

const StyledIcon = styled(Icon)<{$isOpen: boolean}>`
  ${({$isOpen}) => css`
    ${$isOpen &&
    css`
      transform: rotate(180deg);
    `}
  `};
`;

const RowItem = styled.div`
  ${() => css`
    &:nth-of-type(1) {
      flex-basis: 20%;
    }
    &:nth-of-type(2) {
      flex-basis: 40%;
    }
    &:nth-of-type(3) {
      flex-basis: 40%;
    }
  `};
`;

const IndexText = styled(Text)`
  ${() => css`
    width: fit-content;
    min-width: 30px;
    text-align: center;
  `};
`;

const DateText = styled(Text)`
  ${() => css`
    text-align: start;
  `};
`;

const AmountText = styled(Text)`
  ${() => css`
    width: 100%;
    text-align: end;
    margin-left: auto;
  `};
`;

const Currency = styled.span`
  ${() => css`
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${colors.neutral};
  `};
`;

const HistoryBox = ({data}: ComponentProps) => {
  const {isOpen, onClick} = useExtendableContent();

  return (
    <Root>
      <TopContainer>
        <Icon icon={iconHistory} />
        <IconWrapper onClick={() => onClick()}>
          <StyledIcon icon={iconChevronDown} $isOpen={isOpen} />
        </IconWrapper>
      </TopContainer>
      <BottomContainer $isOpen={isOpen}>
        {data.entries.map((entry, index) => {
          return (
            <Row key={index}>
              <RowItem>
                <IndexText boxed>{index + 1}</IndexText>
              </RowItem>
              <RowItem>
                <DateText>{entry.date}</DateText>
              </RowItem>
              <RowItem>
                <AmountText boxed>
                  {entry.amount} <Currency>eur</Currency>
                </AmountText>
              </RowItem>
            </Row>
          );
        })}
      </BottomContainer>
    </Root>
  );
};

export default HistoryBox;
