import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconChevronDown, iconDescription} from '@assets/AssetsProvider.ts';
import {Description} from '@customTypes/model/apiTypes.ts';
import Text from '@components/ui/Text/Text.tsx';
import Attributes from '@components/DescriptionBox/elements/Attributes.tsx';
import colors from '@styles/colors.ts';
import useExtendableContent from '@hooks/useExtendableContent.ts';
interface ComponentProps extends CustomComponent {
  data: Description;
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
  `};
`;
const GridRow = styled.div`
  ${() => css`
    display: grid;
    align-items: baseline;
    gap: 40px;
    grid-template-columns: auto 1fr;
  `};
`;

const AttributesWrapper = styled.div`
  ${() => css`
    background: ${colors.background};
    padding: 10px;
    border-radius: 5px;
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

const DescriptionBox = ({data}: ComponentProps) => {
  const {isOpen, onClick} = useExtendableContent();

  return (
    <Root padding={30}>
      <TopContainer>
        <Icon icon={iconDescription} />
        <IconWrapper onClick={() => onClick()}>
          <StyledIcon icon={iconChevronDown} $isOpen={isOpen} />
        </IconWrapper>
      </TopContainer>
      <BottomContainer $isOpen={isOpen}>
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
      </BottomContainer>
    </Root>
  );
};

export default DescriptionBox;
