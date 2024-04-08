import {object, ObjectSchema, string} from 'yup';
import {Path, Resolver, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SecurityCodeDetails} from '@customTypes/model/apiTypes.ts';
import useHelper from '@utils/useHelper.ts';
import {useStore} from '@stores/store.ts';

interface PreviewArray extends Array<Array<boolean>> {}

const validateSecurityCode = (value: string, length = 3) => {
  return (value.match(/1/g) || []).length >= length;
};

const securityCodeDetailsSchema: ObjectSchema<SecurityCodeDetails> =
  object().shape({
    c: string().test('is c valid', value => validateSecurityCode(value || '')),
    m: string().test('is m valid', value => validateSecurityCode(value || '')),
    y: string().test('is y valid', value => validateSecurityCode(value || '')),
  }) as ObjectSchema<SecurityCodeDetails>;

const useSecurityCodeDetails = () => {
  const {wizardStore} = useStore();
  const {replaceAtIndex} = useHelper();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors, isSubmitted},
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

    setValue(name, value, {shouldValidate: isSubmitted});
  };

  const getSecurityCodeValidState = async () => {
    return securityCodeDetailsSchema.isValid(getValues());
  };

  const createPreviewArray = (): PreviewArray => {
    const previewArray: PreviewArray = [];

    Object.values(wizardStore.securityCodeDetails).forEach(
      (item, itemIndex) => {
        Array.from(item).forEach((value, valueIndex) => {
          if (!previewArray[valueIndex]) previewArray[valueIndex] = [];

          previewArray[valueIndex][itemIndex] = value === '1';
        });
      }
    );

    return previewArray;
  };

  return {
    handleSecurityCodeChange,
    securityCodeControl: control,
    securityCodeErrors: errors,
    securityCodeHandleSubmit: handleSubmit,
    getSecurityCodeValidState,
    createPreviewArray,
  };
};

export default useSecurityCodeDetails;
