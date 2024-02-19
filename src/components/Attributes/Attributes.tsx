import styled, {css} from 'styled-components';
import Component from '@customTypes/Component.ts';
import attributeColors from '@styles/attributeColors.ts';

interface ComponentProps extends Component {
  data: string[];
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `};
`;

const Attribute = styled.p<{$type: number}>`
  ${({$type}) => css`
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    letter-spacing: 5px;
    font-size: 16px;
    line-height: 150%;
    background: ${attributeColors[$type]};
    border-radius: 5px;
    padding: 0 10px;
  `};
`;

const Text = styled.span<{$type: number}>`
  ${({$type}) => css`
    color: ${attributeColors[$type]};
    filter: invert();
  `};
`;

const Attributes = ({data}: ComponentProps) => {
  const getType = (attribute: string) => {
    return parseInt(attribute[0], 36) - 9;
  };

  return (
    <Root>
      {data.map(attribute => {
        return (
          <Attribute $type={getType(attribute)}>
            <Text $type={getType(attribute)}>{attribute}</Text>
          </Attribute>
        );
      })}
    </Root>
  );
};

export default Attributes;
