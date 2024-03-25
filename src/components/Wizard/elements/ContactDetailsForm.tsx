import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';
import LocationCoordinatesInput from '@components/Wizard/elements/LocationCoordinatesInput.tsx';
import {Control, UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
import PhoneNumberInput from '@components/Wizard/elements/PhoneNumberInput.tsx';
interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
  control: Control<ContactDetails>;
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const ContactDetailsForm = ({register, control}: ComponentProps) => {
  return (
    <Root>
      <Input
        label={'Name:'}
        placeholder={'Philip J. Fry'}
        register={register}
        name={'name'}
      />
      <Input
        label={'Cosmic mail identifier:'}
        placeholder={'philip.j.fry@gmail.com'}
        register={register}
        name={'mailId'}
      />
      <PhoneNumberInput register={register} control={control} />
      <LocationCoordinatesInput register={register} control={control} />
    </Root>
  );
};

export default ContactDetailsForm;
