import styled, {css} from 'styled-components';
import Layout from '@components/Layout/Layout.tsx';
import ScrollingText from '@components/ScrollingText/ScrollingText.tsx';
import ImageSlider from '@components/ImageSlider/ImageSlider.tsx';
import Text from '@components/ui/Text/Text.tsx';
import Box from '@components/ui/Box/Box.tsx';
import Separator from '@components/ui/Separator/Separator.tsx';
import Header from '@components/ui/Header/Header.tsx';
import Attributes from '@components/Attributes/Attributes.tsx';

const Root = styled.div`
  ${() => css`
    padding-top: 50px;
    width: 100%;
    height: 100%;
  `};
`;

const StyledScrollingText = styled(ScrollingText)`
  ${() => css`
    margin-bottom: 70px;
  `};
`;

const GridRow = styled.div`
  ${() => css`
    display: grid;
    align-items: baseline;
    gap: 10px;
    grid-template-columns: auto 1fr;
    margin-bottom: 20px;
  `};
`;

const ArtifactPage = () => {
  const images = [
    {url: '/src/assets/images/artifact-1.png'},
    {url: '/src/assets/images/artifact-2.png'},
  ];

  function generateRandomString() {
    const minLength = 2;
    const maxLength = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  return (
    <Root>
      <StyledScrollingText />
      <Layout>
        <ImageSlider images={images} />
        <Box>
          <Header>#90137109120</Header>
          <Separator space={24} />

          <GridRow>
            <Text boxed style={'bold'}>
              origin:
            </Text>
            <Text>mixed, unknown</Text>
          </GridRow>

          <GridRow>
            <Text boxed style={'bold'}>
              # of artifacts:
            </Text>
            <Text>2</Text>
          </GridRow>

          <GridRow>
            <Text boxed style={'bold'}>
              condition:
            </Text>
            <Text>good</Text>
          </GridRow>

          <GridRow>
            <Text boxed style={'bold'}>
              dimensions
            </Text>
            <Text>400 x 700</Text>
          </GridRow>

          <GridRow>
            <Text boxed style={'bold'}>
              Attributes:
            </Text>
            <Attributes data={Array.from({length: 14}, generateRandomString)} />
          </GridRow>
        </Box>
      </Layout>
    </Root>
  );
};

export default ArtifactPage;
