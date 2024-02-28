import styled, {css} from 'styled-components';
import {ArtifactAttribute} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  data: ArtifactAttribute[];
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `};
`;

const Attribute = styled.p<{$type?: string}>`
  ${({$type}) => css`
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    letter-spacing: 5px;
    font-size: 16px;
    line-height: 150%;
    background: ${$type};
    border-radius: 5px;
    padding: 0 10px;
  `};
`;

const Text = styled.span<{$type: string}>`
  ${({$type}) => css`
    color: ${$type};
    filter: invert();
  `};
`;

const Attributes = ({data}: ComponentProps) => {
  return (
    <Root>
      {data.map((attribute, index) => {
        return (
          <Attribute key={index} $type={attribute.type}>
            <Text $type={attribute.type}>{attribute.id}</Text>
          </Attribute>
        );
      })}
    </Root>
  );
};

export default Attributes;
