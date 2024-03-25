import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';

const useContactDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {register, control, handleSubmit} = useForm<ContactDetails>();

  const handleTransition = handleSubmit(data => {
    wizardStore.updateContactDetails(data);
    console.log(data);
    wizardStore.setStep(1);
  });

  return {handleTransition, register, control};
};

export default useContactDetailsTransition;
