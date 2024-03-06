import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import {iconHistory} from '@assets/AssetsProvider.ts';
import {History} from '@customTypes/model/apiTypes.ts';
import Text from '@components/ui/Text/Text.tsx';
import colors from '@styles/colors.ts';
import Accordion from '@components/Accordion/Accordion.tsx';

interface ComponentProps extends CustomComponent {
  data: History;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
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
  return (
    <Root>
      <Accordion icon={iconHistory}>
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
      </Accordion>
    </Root>
  );
};

export default HistoryBox;
