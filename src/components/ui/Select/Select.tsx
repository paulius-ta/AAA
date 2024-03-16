import ReactSelect, {components, DropdownIndicatorProps} from 'react-select';
import styled, {css} from 'styled-components';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconSelectArrow} from '@assets/AssetsProvider.ts';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  options: SelectOption[];
}

const Root = styled(ReactSelect)`
  ${() => css`
    width: 100%;
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    letter-spacing: 5px;
    font-size: 15px;
    line-height: 125%;
    text-align: center;

    .select__control {
      position: relative;
      height: 44px;
      border: 1px solid ${colors.neutral};
      border-radius: 5px;
      padding: 10px 20px;

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
  `};
`;

const Select = ({className, options}: ComponentProps) => {
  const DropdownIndicator = ({...props}: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
      <Icon icon={iconSelectArrow} size={10} />
    </components.DropdownIndicator>
  );

  return (
    <Root
      placeholder={false}
      isSearchable={false}
      className={className}
      classNamePrefix={'select'}
      options={options}
      components={{DropdownIndicator}}
    />
  );
};

export default Select;
