import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Accordion from '@components/Accordion/Accordion.tsx';
import {iconImages} from '@assets/AssetsProvider.ts';
import {Images} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  data: Images;
}

const Root = styled(Box)`
  ${() => css``};
`;

const ImagesContainer = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  `};
`;

const Image = styled.img`
  ${() => css`
    max-width: 150px;
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  `};
`;

const ImagesBox = ({data}: ComponentProps) => {
  return (
    <Root>
      <Accordion icon={iconImages}>
        <ImagesContainer>
          {data.images.map((image, index) => {
            return <Image key={index} src={image.url} />;
          })}
        </ImagesContainer>
      </Accordion>
    </Root>
  );
};

export default ImagesBox;
