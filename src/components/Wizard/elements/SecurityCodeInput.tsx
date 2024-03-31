import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import {Control, FieldErrors, UseFormRegister} from 'react-hook-form';
import SecurityCode from '@components/Wizard/elements/SecurityCode.tsx';

interface ComponentProps extends CustomComponent {
  control: Control<SecurityCodeType>;
  register: UseFormRegister<SecurityCodeType>;
  errors: FieldErrors<SecurityCodeType>;
}

const Root = styled.div`
  ${() => css`
    position: relative;
    margin-top: 20px;
    display: flex;
    gap: 5px;
  `};
`;

const SecurityCodeInput = ({control, register, errors}: ComponentProps) => {
  return (
    <Root>
      <Label>TVV</Label>
      <SecurityCode
        variant={'c'}
        control={control}
        register={register}
        name={'c'}
        error={errors.c?.root?.message}
      />
      <SecurityCode
        variant={'m'}
        control={control}
        register={register}
        name={'m'}
        error={errors.m?.root?.message}
      />
      <SecurityCode
        variant={'y'}
        control={control}
        register={register}
        name={'y'}
        error={errors.y?.root?.message}
      />
    </Root>
  );
};
export default SecurityCodeInput;
