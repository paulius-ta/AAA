import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import ContactDetailsForm from '@components/Wizard/elements/ContactDetailsForm.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconContact} from '@assets/AssetsProvider.ts';
import useContactDetailsTransition from '@components/Wizard/transitions/useContactDetailsTransition.ts';

const Root = styled(Box)`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const StyledButton = styled(Button)`
  ${() => css`
    align-self: flex-end;
  `};
`;

const StyledIcon = styled(Icon)`
  ${() => css`
    align-self: center;
  `};
`;
const ContactDetailsStep = () => {
  const {handleTransition} = useContactDetailsTransition();

  return (
    <Root>
      <StyledIcon icon={iconContact} />
      <ContactDetailsForm />
      <StyledButton onClick={handleTransition}>Next</StyledButton>
    </Root>
  );
};

export default ContactDetailsStep;
