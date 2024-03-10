import {useStore} from '@stores/store.ts';
import {useState} from 'react';

const useWizardNavigator = () => {
  const {wizardStore} = useStore();
  const [activeStep, setActiveStep] = useState(wizardStore.step);

  const handleClick = (id: number) => {
    wizardStore.setStep(id);
    setActiveStep(id);
  };

  return {handleClick, activeStep};
};

export default useWizardNavigator;
