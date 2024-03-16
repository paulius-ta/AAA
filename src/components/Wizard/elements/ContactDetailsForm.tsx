import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';
import PhoneNumberInput from '@components/Wizard/elements/PhoneNumberInput.tsx';
import LocationCoordinatesInput from '@components/Wizard/elements/LocationCoordinatesInput.tsx';

const Root = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const ContactDetailsForm = () => {
  return (
    <Root>
      <Input label={'Name:'} placeholder={'Philip J. Fry'} />
      <Input
        label={'Cosmic mail identifier:'}
        placeholder={'philip.j.fry@gmail.com'}
      />
      <PhoneNumberInput />
      <LocationCoordinatesInput />
    </Root>
  );
};

export default ContactDetailsForm;
