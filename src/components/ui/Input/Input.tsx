import styled, {css} from 'styled-components';
import {FieldValues, Path, UseFormRegister} from 'react-hook-form';
import Label from '@components/ui/Label/Label.tsx';
import ErrorText from '@components/ui/Error/ErrorText.tsx';

interface ComponentProps<T extends FieldValues> extends CustomComponent {
  register?: UseFormRegister<T>;
  name?: Path<T>;
  label?: string;
  error?: string;
  placeholder?: string;
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

const InputField = styled.input`
  ${() => css``};
`;

const Input = <T extends FieldValues>({
  label,
  error,
  placeholder,
}: ComponentProps<T>) => {
  return (
    <Root $hasLabel={!!label}>
      {label && <Label>{label}</Label>}
      <InputField placeholder={placeholder} />
      {error && <ErrorText>{error}</ErrorText>}
    </Root>
  );
};

export default Input;
