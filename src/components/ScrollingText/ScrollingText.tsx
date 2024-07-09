import styled, {css} from 'styled-components';
import breakpoints from '@styles/breakpoints.ts';
import useScrollingText from '@hooks/useScrollingText.ts';

interface ComponentProps extends CustomComponent {}

const Root = styled.div`
  ${() => css`
    background: linear-gradient(to right, #e413e9, #3810d6);
    padding: 10px 0;
    overflow: hidden;
  `};
`;

const Container = styled.div`
  ${() => css`
    height: 110px;
    background: #c6ff22;
    display: flex;
    user-select: none;
    white-space: nowrap;

    ${breakpoints.mobile`
      height: 55px;        
    `}
  `};
`;

const Content = styled.div`
  ${() => css`
    display: flex;
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
    padding: 0 50px;

    ${breakpoints.mobile`
      font-size: 40px;
      line-height: 55px;        
    `}
  `};
`;

const ScrollingText = ({className}: ComponentProps) => {
  const {containerRef, contentRef} = useScrollingText();
  const text = 'Get your alien artifact now !!!';

  return (
    <Root className={className}>
      <Container ref={containerRef}>
        <Content ref={contentRef}>
          {[...Array(4)].map((_, index) => (
            <Item key={index}>{text}</Item>
          ))}
        </Content>
      </Container>
    </Root>
  );
};

export default ScrollingText;
