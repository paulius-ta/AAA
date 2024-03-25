import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import {phoneNumberOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {UseFormRegister, Control} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
  control: Control<ContactDetails>;
}

const Root = styled.div`
  ${() => css`
    margin-top: 20px;
    position: relative;
    display: flex;
    gap: 10px;
  `};
`;

const PhoneNumberInput = ({register, control}: ComponentProps) => {
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <Select
        width={200}
        options={phoneNumberOptions}
        control={control}
        name={'phoneNumber.prefix'}
      />
      <Input
        placeholder={'006234523486'}
        register={register}
        name={'phoneNumber.number'}
      />
    </Root>
  );
};

export default PhoneNumberInput;
