import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';

const useContactDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {register, handleSubmit} = useForm<ContactDetails>();

  const handleTransition = handleSubmit(data => {
    wizardStore.updateContactDetails(data);
  });

  return {handleTransition, register};
};

export default useContactDetailsTransition;
