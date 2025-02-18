import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import {iconHistory} from '@assets/AssetsProvider.ts';
import {History} from '@customTypes/model/apiTypes.ts';
import Text from '@components/ui/Text/Text.tsx';
import colors from '@styles/colors.ts';
import Accordion from '@components/Accordion/Accordion.tsx';
import {useState} from 'react';
import breakpoints from '@styles/breakpoints.ts';
import useDateTimeFormatter from '@utils/useDateTimeFormatter.ts';

interface ComponentProps extends CustomComponent {
  data: History;
  secondary?: boolean;
  isAutoCollapsed?: boolean;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  `};
`;

const StyledRow = styled(Row)`
  ${() => css`
    font-size: 12px;
    justify-content: center;
    cursor: pointer;
    text-decoration: underline;
  `};
`;

const RowItem = styled.div`
  ${() => css`
    &:nth-of-type(1) {
      flex-basis: 15%;
    }
    &:nth-of-type(2) {
      flex-basis: 45%;
      max-width: 45%;
    }
    &:nth-of-type(3) {
      flex-basis: 40%;
    }
  `};
`;

const ExtendedText = styled(Text)<{secondary?: boolean}>`
  ${({secondary}) => css`
    ${secondary &&
    css`
      background: ${colors.boxBackground};
    `}
  `};
`;

const IndexText = styled(ExtendedText)`
  ${() => css`
    width: fit-content;
    min-width: 30px;
    text-align: center;
  `};
`;

const DateText = styled(ExtendedText)`
  ${() => css`
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `};
`;

const AmountText = styled(ExtendedText)`
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

    ${breakpoints.mobile`
      font-size: 12px;
    `}
  `};
`;

const HistoryBox = ({data, secondary, isAutoCollapsed}: ComponentProps) => {
  const [limit, setLimit] = useState(Math.min(data.length, 3));
  const [showAll, setShowAll] = useState(data.length > limit);
  const {formatTimestamp} = useDateTimeFormatter();

  const handleShowAll = () => {
    setLimit(data.length);
    setShowAll(false);
  };

  return (
    <Root secondary={secondary}>
      <Accordion icon={iconHistory} isAutoCollapsed={isAutoCollapsed}>
        {data.slice(0, limit).map((entry, index) => {
          return (
            <Row key={index}>
              <RowItem>
                <IndexText boxed secondary={secondary}>
                  {index + 1}
                </IndexText>
              </RowItem>
              <RowItem>
                <DateText>{formatTimestamp(entry.timestamp)}</DateText>
              </RowItem>
              <RowItem>
                <AmountText boxed secondary={secondary}>
                  {entry.amount} <Currency>eur</Currency>
                </AmountText>
              </RowItem>
            </Row>
          );
        })}
        {showAll && (
          <StyledRow onClick={handleShowAll}>Show all bids</StyledRow>
        )}
      </Accordion>
    </Root>
  );
};

export default HistoryBox;
