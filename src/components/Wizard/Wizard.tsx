import {observer} from 'mobx-react-lite';
import useWizard from '@hooks/useWizard.ts';

const Wizard = observer(() => {
  const {getCurrentStep} = useWizard();
  const currentStep = getCurrentStep();

  if (!currentStep) return;
  const Component = currentStep.component;

  return <Component />;
});

export default Wizard;
