import {observer} from 'mobx-react-lite';
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

const WizardNavigator = observer(() => {
  const {activeStep, validStep, handleClick} = useWizardNavigator();

  return (
    <Root>
      {wizardSteps.map(step => {
        return (
          <NavigatorItem
            onClick={() => handleClick(step.id)}
            key={`${step.id}-step`}
            icon={step.icon}
            active={step.id === activeStep}
            disabled={step.id > validStep}
          />
        );
      })}
    </Root>
  );
});

export default WizardNavigator;
