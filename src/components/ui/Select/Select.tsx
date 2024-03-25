import ReactSelect, {SingleValue} from 'react-select';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import styled, {css} from 'styled-components';
import reactSelect from '@styles/reactSelect.ts';
import useSelect from '@hooks/useSelect.tsx';

interface ComponentProps<T extends FieldValues> extends CustomComponent {
  options: SelectOption[];
  control: Control<T>;
  name: Path<T>;
  width?: number;
}

const Root = styled.div<{$width?: number}>`
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

    ${reactSelect}
  `};
`;

const Select = <T extends FieldValues>({
  options,
  control,
  name,
  width,
}: ComponentProps<T>) => {
  const {config} = useSelect(options);

  return (
    <Root $width={width}>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <ReactSelect
            {...field}
            {...config}
            isMulti={false}
            value={
              field.value ? options.find(o => o.value === field.value) : null
            }
            onChange={(option: SingleValue<SelectOption>) => {
              field.onChange(option?.value);
            }}
          />
        )}
      />
    </Root>
  );
};

export default Select;
