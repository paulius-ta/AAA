import ReactSelect, {components, DropdownIndicatorProps} from 'react-select';
import styled, {css} from 'styled-components';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconSelectArrow} from '@assets/AssetsProvider.ts';
import colors from '@styles/colors.ts';

const Root = styled(ReactSelect)`
  ${() => css`
    .select__control {
      height: 44px;
      border: 1px solid ${colors.neutral};
      border-radius: 5px;

      &:hover {
        border: 1px solid ${colors.neutral};
      }

      &--is-focused {
        border: 1px solid ${colors.neutral};
        box-shadow: unset;
      }
    }

    .select__value-container {
      display: none;

      &--has-value {
        padding: 10px 20px;
        display: grid;
      }

      &--has-value + .select__indicators {
        display: none;
      }
    }

    .select__indicators {
      width: 100%;
    }

    .select__indicator {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .select__indicator-separator {
      display: none;
    }

    .select__option--is-focused,
    .select__option--is-selected {
      background: ${colors.background};
    }
  `};
`;

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
];

const Select = () => {
  const DropdownIndicator = ({...props}: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
      <Icon icon={iconSelectArrow} size={10} />
    </components.DropdownIndicator>
  );

  return (
    <Root
      classNamePrefix={'select'}
      options={options}
      components={{DropdownIndicator}}
    />
  );
};

export default Select;
