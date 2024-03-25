import ReactSelect, {components, DropdownIndicatorProps} from 'react-select';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconSelectArrow} from '@assets/AssetsProvider.ts';
import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';

interface ComponentProps<T extends FieldValues> extends CustomComponent {
  options: SelectOption[];
  control: Control<T>;
  name: Path<T>;
  width?: number;
}

const SelectWrapper = styled.div<{$width?: number}>`
  ${({$width}) => css`
    width: 100%;
    flex-shrink: 0;
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    letter-spacing: 5px;
    font-size: 15px;
    line-height: 125%;
    text-align: center;

    ${$width &&
    css`
      width: ${$width}px;
    `}

    .select__control {
      position: relative;
      height: 44px;
      border: 1px solid ${colors.neutral};
      border-radius: 5px;
      padding: 10px;

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

const Select = <T extends FieldValues>({
  options,
  control,
  name,
  width,
}: ComponentProps<T>) => {
  const DropdownIndicator = (props: DropdownIndicatorProps<SelectOption>) => (
    <components.DropdownIndicator {...props}>
      <Icon icon={iconSelectArrow} size={10} />
    </components.DropdownIndicator>
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange, ...rest}}) => (
        <SelectWrapper $width={width}>
          <ReactSelect
            {...rest}
            options={options}
            isMulti={false}
            placeholder={false}
            isSearchable={false}
            classNamePrefix={'select'}
            components={{DropdownIndicator}}
            value={value ? options.find(opt => opt.value === value) : null}
            onChange={(option: Nullable<SelectOption>) => {
              onChange(option?.value);
            }}
          />
        </SelectWrapper>
      )}
    />
  );
};

export default Select;
