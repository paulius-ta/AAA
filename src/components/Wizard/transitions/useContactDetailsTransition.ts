import {useStore} from '@stores/store.ts';
import {useForm} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
import {yupResolver} from '@hookform/resolvers/yup';
import {ObjectSchema, object, string, number} from 'yup';

const contactDetailsSchema: ObjectSchema<ContactDetails> = object().shape({
  name: string().required(),
  mailId: string().email().required(),
  phoneNumber: object().shape({
    prefix: string().required(),
    number: number().required().default(null),
  }),
  coordinates: object().shape({
    lat: object().shape({
      prefix1: string().required(),
      prefix2: string().required(),
      prefix3: string().required(),
      coordinate: number().required().default(null),
    }),
    long: object().shape({
      prefix1: string().required(),
      prefix2: string().required(),
      prefix3: string().required(),
      coordinate: number().required().default(null),
    }),
  }),
});

const useContactDetailsTransition = () => {
  const {wizardStore} = useStore();
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ContactDetails>({
    resolver: yupResolver(contactDetailsSchema),
    shouldFocusError: false,
  });

  const handleTransition = handleSubmit(data => {
    wizardStore.updateContactDetails(data);
    wizardStore.setStep(1);
  });

  return {handleTransition, register, control, errors};
};

export default useContactDetailsTransition;
