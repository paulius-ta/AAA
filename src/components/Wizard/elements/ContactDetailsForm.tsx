import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';
import PhoneNumberInput from '@components/Wizard/elements/PhoneNumberInput.tsx';
import LocationCoordinatesInput from '@components/Wizard/elements/LocationCoordinatesInput.tsx';
import {UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
}

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const ContactDetailsForm = ({register}: ComponentProps) => {
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
      <PhoneNumberInput register={register} />
      <LocationCoordinatesInput register={register} />
    </Root>
  );
};

export default ContactDetailsForm;
