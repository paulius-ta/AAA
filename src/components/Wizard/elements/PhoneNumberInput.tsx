import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import {phoneNumberOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {UseFormRegister, Control, FieldErrors} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
import breakpoints from '@styles/breakpoints.ts';
import useViewport from '@utils/useViewport.ts';
interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
  control: Control<ContactDetails>;
  errors: FieldErrors<ContactDetails>;
}

const Root = styled.div`
  ${() => css`
    margin-top: 20px;
    position: relative;
    display: flex;
    gap: 10px;

    ${breakpoints.mobile`
      flex-direction: column;
    `}
  `};
`;

const PhoneNumberInput = ({register, control, errors}: ComponentProps) => {
  const {isDesktop} = useViewport();
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <Select
        width={isDesktop ? 200 : undefined}
        options={phoneNumberOptions}
        control={control}
        name={'phoneNumber.prefix'}
        error={errors.phoneNumber?.prefix?.message}
      />
      <Input
        placeholder={'006234523486'}
        register={register}
        name={'phoneNumber.number'}
        error={errors.phoneNumber?.number?.message}
      />
    </Root>
  );
};

export default PhoneNumberInput;
