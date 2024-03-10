import {useStore} from '@stores/store.ts';
import wizardSteps from '@config/wizardSteps.ts';

const useWizard = () => {
  const {wizardStore} = useStore();
  const {step} = wizardStore;

  const getCurrentStep = () => {
    return wizardSteps.find(s => s.id === step);
  };

  return {getCurrentStep};
};

export default useWizard;
