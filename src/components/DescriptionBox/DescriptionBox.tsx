import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import {iconDescription} from '@assets/AssetsProvider.ts';
import {Description} from '@customTypes/model/apiTypes.ts';
import Text from '@components/ui/Text/Text.tsx';
import Attributes from '@components/DescriptionBox/elements/Attributes.tsx';
import colors from '@styles/colors.ts';
import Accordion from '@components/Accordion/Accordion.tsx';
import breakpoints from '@styles/breakpoints.ts';
interface ComponentProps extends CustomComponent {
  data: Description;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};
`;

const GridRow = styled.div`
  ${() => css`
    display: grid;
    align-items: baseline;
    gap: 40px;
    grid-template-columns: auto 1fr;

    ${breakpoints.mobile`
      grid-template-columns: auto;
      gap: 10px;      
    `}
  `};
`;

const AttributesWrapper = styled.div`
  ${() => css`
    background: ${colors.background};
    padding: 10px;
    border-radius: 5px;
  `};
`;

const DescriptionBox = ({data}: ComponentProps) => {
  return (
    <Root>
      <Accordion icon={iconDescription}>
        <Row>
          <Text>Origin</Text>
          <Text boxed>{data.origin?.join(', ')}</Text>
        </Row>
        <Row>
          <Text>Number</Text>
          <Text boxed>{data.number}</Text>
        </Row>
        <Row>
          <Text>Condition</Text>
          <Text boxed>{data.condition}</Text>
        </Row>
        <Row>
          <Text>Dimensions</Text>
          <Text boxed>{data.dimensions?.join(' x ')}</Text>
        </Row>
        <GridRow>
          <Text>Attributes</Text>
          <AttributesWrapper>
            <Attributes data={data.attributes} />
          </AttributesWrapper>
        </GridRow>
      </Accordion>
    </Root>
  );
};

export default DescriptionBox;
