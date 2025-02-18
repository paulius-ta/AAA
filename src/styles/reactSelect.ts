import {css} from 'styled-components';
import colors from '@styles/colors.ts';
import breakpoints from '@styles/breakpoints.ts';

const reactSelect = css`
  .select__control {
    position: relative;
    height: 44px;
    border: 1px solid ${colors.neutral};
    border-radius: 5px;
    padding: 10px;

    ${breakpoints.mobile`    
      height: 38px;
    `}

    &:hover {
      border: 1px solid ${colors.neutral};
    }

    &--is-focused {
      border: 1px solid ${colors.neutral};
      box-shadow: unset;
    }
  }

  .select__value-container {
    height: 100%;
    max-width: 0;
    padding: 0;

    &--has-value {
      max-width: unset;
    }

    &--has-value + .select__indicators {
      display: none;
    }
  }

  .select__input-container {
    width: 100%;
  }

  .select__single-value {
    margin: 0;
  }

  .select__indicators {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .select__indicator-separator {
    display: none;
  }

  .select__option--is-focused,
  .select__option--is-selected {
    background: ${colors.background};
  }

  .select__input-container {
    padding: 0;
    margin: 5px 0 0;
  }
`;

export default reactSelect;
