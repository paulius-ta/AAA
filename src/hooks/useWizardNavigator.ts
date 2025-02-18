import {useStore} from '@stores/store.ts';

const useWizardNavigator = () => {
  const {wizardStore} = useStore();

  const handleClick = (id: number) => {
    wizardStore.setStep(id);
  };

  return {
    handleClick,
    activeStep: wizardStore.step,
    validStep: wizardStore.validStep,
  };
};

export default useWizardNavigator;
