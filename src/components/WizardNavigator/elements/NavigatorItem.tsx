import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import {FunctionComponent} from 'react';
import Icon from '@components/ui/Icon/Icon.tsx';
import c from 'classnames';

interface ComponentProps extends CustomComponent {
  icon: FunctionComponent;
  active: boolean;
  disabled: boolean;
  onClick: () => void;
}

const Root = styled.button`
  ${() => css`
    all: unset;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const Index = styled.div`
  ${() => css`
    cursor: pointer;
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.primaryAction};
    color: ${colors.primaryOnAction};
    font-size: 20px;

    &.active {
      @keyframes spin {
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }

      &:after {
        cursor: initial;
        content: '';
        position: absolute;
        width: 64px;
        height: 64px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url('/src/assets/icons/ic_orbit-large.svg') no-repeat center;
        background-size: contain;
        animation: spin 4s linear infinite;
        pointer-events: none;
      }
    }

    &.disabled {
      cursor: not-allowed;
      background: ${colors.neutral20};
    }
  `};
`;

const NavigatorItem = ({onClick, icon, active, disabled}: ComponentProps) => {
  return (
    <Root disabled={disabled}>
      <Index
        onClick={onClick}
        className={c({active: active, disabled: disabled})}
      >
        <Icon icon={icon} size={20} />
      </Index>
    </Root>
  );
};

export default NavigatorItem;
