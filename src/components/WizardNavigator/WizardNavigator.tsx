import styled, {css} from 'styled-components';
import NavigatorItem from '@components/WizardNavigator/elements/NavigatorItem.tsx';
import useWizardNavigator from '@hooks/useWizardNavigator.ts';
import wizardSteps from '@config/wizardSteps.ts';

const Root = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const WizardNavigator = () => {
  const {activeStep, handleClick} = useWizardNavigator();

  return (
    <Root>
      {wizardSteps.map(step => {
        return (
          <NavigatorItem
            onClick={() => handleClick(step.id)}
            key={`${step.id}-step`}
            index={step.id + 1}
            active={step.id === activeStep}
            disabled={false}
          />
        );
      })}
    </Root>
  );
};

export default WizardNavigator;
