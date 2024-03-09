import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import ContactDetailsForm from '@components/Wizard/elements/ContactDetailsForm.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconContact} from '@assets/AssetsProvider.ts';

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
  return (
    <Root>
      <StyledIcon icon={iconContact} />
      <ContactDetailsForm />
      <StyledButton onClick={() => {}}>Next</StyledButton>
    </Root>
  );
};

export default ContactDetailsStep;
