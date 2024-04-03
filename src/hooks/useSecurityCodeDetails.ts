import {object, ObjectSchema, string} from 'yup';
import {Path, Resolver, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SecurityCodeDetails} from '@customTypes/model/apiTypes.ts';
import useHelper from '@utils/useHelper.ts';
import {useStore} from '@stores/store.ts';

const securityCodeDetailsSchema: ObjectSchema<SecurityCodeDetails> =
  object().shape({
    c: string().test('at-least-three-ones', value =>
      /^(?:[^1]*1[^1]*){3}$/.test(value ?? '')
    ),
    m: string().test('at-least-three-ones', value =>
      /^(?:[^1]*1[^1]*){3}$/.test(value ?? '')
    ),
    y: string().test('at-least-three-ones', value =>
      /^(?:[^1]*1[^1]*){3}$/.test(value ?? '')
    ),
  }) as ObjectSchema<SecurityCodeDetails>;

const useSecurityCodeDetails = () => {
  const {wizardStore} = useStore();
  const {replaceAtIndex} = useHelper();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors, isValid},
  } = useForm<SecurityCodeDetails>({
    resolver: yupResolver(
      securityCodeDetailsSchema
    ) as Resolver<SecurityCodeDetails>,
    defaultValues: wizardStore.securityCodeDetails,
  });

  const handleSecurityCodeChange = (
    name: Path<SecurityCodeDetails>,
    index: number,
    char: string
  ) => {
    const value = replaceAtIndex(getValues(name), index, char);

    if (!value) return;

    setValue(name, value, {shouldValidate: true});
  };

  return {
    handleSecurityCodeChange,
    securityCodeControl: control,
    securityCodeErrors: errors,
    securityCodeHandleSubmit: handleSubmit,
    securityCodeIsValid: isValid,
  };
};

export default useSecurityCodeDetails;
