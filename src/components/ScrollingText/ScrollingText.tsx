import styled, {css} from 'styled-components';

interface ComponentProps extends CustomComponent {}

const Root = styled.div`
  ${() => css`
    background: linear-gradient(to right, #e413e9, #3810d6);
    padding: 10px 0;
  `};
`;

const Container = styled.div`
  ${() => css`
    height: 110px;
    background: #c6ff22;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 100px;
  `};
`;

const Content = styled.div`
  ${() => css`
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: 100px;
    animation: scrolling-text 20s linear infinite;
  `};
`;

const Item = styled.div`
  ${() => css`
    font-family: 'foreign-3d', sans-serif;
    font-size: 80px;
    line-height: 110px;
    background: linear-gradient(to right, #f65e08, #175fea);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  `};
`;

const ScrollingText = ({className}: ComponentProps) => {
  return (
    <Root className={className}>
      <Container>
        <Content>
          <Item>Get your alien artifact now !!!</Item>
          <Item>Get your alien artifact now !!!</Item>
        </Content>
        <Content aria-hidden="true">
          <Item>Get your alien artifact now !!!</Item>
          <Item>Get your alien artifact now !!!</Item>
        </Content>
      </Container>
    </Root>
  );
};

export default ScrollingText;
