import styled, {css} from 'styled-components';
import useExperiments from '@xperiments/hooks/useExperiments.ts';
import Button from '@components/ui/Button/Button.tsx';
import SecurityCodeInput from '@components/Wizard/elements/SecurityCodeInput.tsx';

const Root = styled.div`
  ${() => css`
    max-width: 1240px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    width: 100%;
    height: 100%;
  `};
`;

const StyledButton = styled(Button)`
  ${() => css`
    margin-top: 50px;
  `};
`;

const ExperimentsPage = () => {
  const {handleClick, control, errors, handleSecurityCodeChange} =
    useExperiments();

  return (
    <Root>
      <SecurityCodeInput
        control={control}
        onChange={handleSecurityCodeChange}
        errors={errors}
      />
      {errors.c?.message}

      <StyledButton onClick={handleClick}>submit</StyledButton>
    </Root>
  );
};

export default ExperimentsPage;
