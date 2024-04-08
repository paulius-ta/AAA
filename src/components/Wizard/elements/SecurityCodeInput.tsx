import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import {Control, FieldErrors, Path} from 'react-hook-form';
import SecurityCode from '@components/Wizard/elements/SecurityCode.tsx';
import {SecurityCodeDetails} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  control: Control<SecurityCodeDetails>;
  onChange: (
    name: Path<SecurityCodeDetails>,
    index: number,
    char: string
  ) => void;
  errors: FieldErrors<SecurityCodeDetails>;
}

const Root = styled.div`
  ${() => css`
    position: relative;
    margin-top: 20px;
    display: flex;
    gap: 5px;
  `};
`;

const SecurityCodeInput = ({control, onChange, errors}: ComponentProps) => {
  return (
    <Root>
      <Label>TVV:</Label>
      <SecurityCode
        control={control}
        name={'c'}
        error={errors.c?.message}
        onChange={onChange}
      />
      <SecurityCode
        control={control}
        name={'m'}
        error={errors.m?.message}
        onChange={onChange}
      />
      <SecurityCode
        control={control}
        name={'y'}
        error={errors.y?.message}
        onChange={onChange}
      />
    </Root>
  );
};
export default SecurityCodeInput;
