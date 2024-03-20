import styled, {css} from 'styled-components';
import SecurityCode from '@components/Wizard/elements/SecurityCode.tsx';
import Label from '@components/ui/Label/Label.tsx';

const Root = styled.div`
  ${() => css`
    position: relative;
    margin-top: 20px;
    display: flex;
    gap: 5px;
  `};
`;

const SecurityCodeInput = () => {
  return (
    <Root>
      <Label>TVV</Label>
      <SecurityCode variant={1} />
      <SecurityCode variant={2} />
      <SecurityCode variant={3} />
    </Root>
  );
};
export default SecurityCodeInput;
