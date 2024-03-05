import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import useTimer from '@hooks/useTimer.ts';

interface ComponentProps extends CustomComponent {
  endTime: number;
}

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
    font-size: 24px;
    padding: 10px;
    border-radius: 5px;
  `};
`;

const Timer = ({endTime}: ComponentProps) => {
  const {formattedTime} = useTimer(endTime);
  return <Root>{formattedTime}</Root>;
};
export default Timer;
