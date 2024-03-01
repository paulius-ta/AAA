import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';

const Root = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.timerBackground};
    color: ${colors.timerText};
    font-family: 'digital', sans-serif;
    font-weight: normal;
    font-size: 32px;
    padding: 10px;
    border-radius: 5px;
  `};
`;

const Timer = () => {
  return <Root>39:51:09</Root>;
};
export default Timer;
