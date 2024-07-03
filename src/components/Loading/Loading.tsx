import styled, {css} from 'styled-components';
import breakpoints from '@styles/breakpoints.ts';

const Root = styled.div`
  ${() => css`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const LoadingText = styled.p`
  ${() => css`
    font-family: 'vertical-horizon-academy', sans-serif;
    font-weight: normal;
    font-size: 64px;
    color: orange;
    text-align: center;

    ${breakpoints.mobile`
        font-size: 36px;
      `}
  `};
`;
const Loading = () => {
  return (
    <Root>
      <LoadingText>Loading ...</LoadingText>
    </Root>
  );
};

export default Loading;
