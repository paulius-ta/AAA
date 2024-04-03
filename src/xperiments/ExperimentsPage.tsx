import styled, {css} from 'styled-components';
import useExperiments from '@xperiments/hooks/useExperiments.ts';
import Button from '@components/ui/Button/Button.tsx';

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
  const {} = useExperiments();

  return (
    <Root>
      <StyledButton onClick={() => {}}> Button</StyledButton>
    </Root>
  );
};

export default ExperimentsPage;
