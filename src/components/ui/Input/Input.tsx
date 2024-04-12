import styled, {css} from 'styled-components';
import {FieldValues, Path, UseFormRegister} from 'react-hook-form';
import Label from '@components/ui/Label/Label.tsx';
import colors from '@styles/colors.ts';

interface ComponentProps<T extends FieldValues> extends CustomComponent {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: string;
  error?: string;
  placeholder?: string;
  showCurrency?: boolean;
}

const Root = styled.div<{$hasLabel: boolean}>`
  ${({$hasLabel}) => css`
    position: relative;
    width: 100%;

    ${$hasLabel &&
    css`
      margin-top: 20px;
    `}
  `};
`;

const InputField = styled.input<{$showCurrency?: boolean}>`
  ${({$showCurrency}) => css`
    width: 100%;
    height: 100%;
    font-family: 'foreign', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 125%;
    padding: 10px;
    border: 1px solid ${colors.neutral};
    border-radius: 5px;
    text-overflow: ellipsis;

    &::placeholder {
      color: ${colors.neutral20};
    }

    ${$showCurrency &&
    css`
      padding-right: 80px;
    `}

    &.error {
      border: 1px solid ${colors.error};
    }
  `};
`;

const InputFieldWrapper = styled.div`
  ${() => css`
    height: 44px;
    width: 100%;
    position: relative;
  `};
`;

const Currency = styled.span`
  ${() => css`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(calc(-50% + 2px));
    font-family: 'galactico', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${colors.neutral};
  `};
`;

const Input = <T extends FieldValues>({
  name,
  register,
  label,
  error,
  placeholder,
  showCurrency,
}: ComponentProps<T>) => {
  return (
    <Root $hasLabel={!!label}>
      {label && <Label>{label}</Label>}
      <InputFieldWrapper>
        <InputField
          id={name}
          placeholder={placeholder}
          $showCurrency={showCurrency}
          className={error ? 'error' : ''}
          {...register(name)}
        />
        {showCurrency && <Currency>eur</Currency>}
      </InputFieldWrapper>
    </Root>
  );
};

export default Input;
