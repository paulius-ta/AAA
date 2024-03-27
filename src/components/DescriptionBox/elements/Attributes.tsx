import styled, {css} from 'styled-components';
import {ArtifactAttribute} from '@customTypes/model/apiTypes.ts';
import Attribute from '@components/DescriptionBox/elements/Attribute.tsx';

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
          <Attribute key={index} type={attribute.type}>
            <Text $type={attribute.type}>{attribute.id}</Text>
          </Attribute>
        );
      })}
    </Root>
  );
};

export default Attributes;
