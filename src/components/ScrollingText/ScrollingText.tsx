import styled, {css} from 'styled-components';
import Component from '@customTypes/Component.ts';

interface ComponentProps extends Component {}

const Root = styled.div`
  ${() => css`
    height: 110px;
    background: #c6ff22;
    overflow-x: hidden;
    display: flex;
    gap: 300px;
  `};
`;

const Text = styled.span`
  ${() => css`
    font-family: 'foreign-extra-bold', sans-serif;
    font-size: 80px;
    line-height: 110px;
    background: linear-gradient(to right, #f65e08, #175fea);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    white-space: nowrap;
    animation: scrolling-text 120s linear infinite;
  `};
`;

const ScrollingText = ({className}: ComponentProps) => {
  return (
    <Root className={className}>
      {[...Array(10)].map(() => (
        <Text>Get your alien artifact now !!!</Text>
      ))}
    </Root>
  );
};

export default ScrollingText;
