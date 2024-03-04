import styled, {css} from 'styled-components';
import {FieldValues, Path, UseFormRegister} from 'react-hook-form';
import Label from '@components/ui/Label/Label.tsx';
import ErrorText from '@components/ui/Error/ErrorText.tsx';
import colors from '@styles/colors.ts';

interface ComponentProps<T extends FieldValues> extends CustomComponent {
  register?: UseFormRegister<T>;
  name?: Path<T>;
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
    font-family: 'foreign', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 125%;
    padding: 10px 20px;
    border: 1px solid ${colors.neutral};
    border-radius: 5px;

    &::placeholder {
      color: ${colors.neutral};
    }

    ${$showCurrency &&
    css`
      padding-right: 80px;
    `}
  `};
`;

const InputFieldWrapper = styled.div`
  ${() => css`
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
  label,
  error,
  placeholder,
  showCurrency,
}: ComponentProps<T>) => {
  return (
    <Root $hasLabel={!!label}>
      {label && <Label>{label}</Label>}
      <InputFieldWrapper>
        <InputField placeholder={placeholder} $showCurrency={showCurrency} />
        {showCurrency && <Currency>eur</Currency>}
      </InputFieldWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Root>
  );
};

export default Input;
