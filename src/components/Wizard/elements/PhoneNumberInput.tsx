import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import {phoneNumberOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
}

const Root = styled.div`
  ${() => css`
    margin-top: 20px;
    position: relative;
    display: flex;
    gap: 10px;
  `};
`;

const StyledSelect = styled(Select)`
  ${() => css`
    width: 200px;
    flex-shrink: 0;
  `};
`;

const PhoneNumberInput = ({register}: ComponentProps) => {
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <StyledSelect options={phoneNumberOptions} />
      <Input
        placeholder={'006234523486'}
        register={register}
        name={'phoneNumber.number'}
      />
    </Root>
  );
};

export default PhoneNumberInput;
