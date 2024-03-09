import styled, {css} from 'styled-components';
import Input from '@components/ui/Input/Input.tsx';

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
      <Input />
      <Input />
      <Input />
    </Root>
  );
};

export default ContactDetailsForm;
