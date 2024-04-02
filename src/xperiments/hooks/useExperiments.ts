import {Path, Resolver, useForm} from 'react-hook-form';
import {useExpStore} from '@xperiments/store/expStore.ts';

import {object, string} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import useHelper from '@utils/useHelper.ts';
const securityCodeSchema = object().shape({
  c: string().test('at-least-one-true', string => string?.includes('1')),
  m: string().test('at-least-one-true', string => string?.includes('1')),
  y: string().test('at-least-one-true', string => string?.includes('1')),
});

const useExperiments = () => {
  const {experimentStore} = useExpStore();
  const {replaceAtIndex} = useHelper();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<SecurityCodeType>({
    resolver: yupResolver(securityCodeSchema) as Resolver<SecurityCodeType>,
    defaultValues: experimentStore.securityCode,
  });

  const handleClick = handleSubmit(
    data => {
      console.log(data);
    },
    () => {
      console.log(errors);
    }
  );

  const handleSecurityCodeChange = (
    name: Path<SecurityCodeType>,
    index: number,
    char: string
  ) => {
    const value = replaceAtIndex(getValues(name), index, char);

    if (!value) return;

    setValue(name, value, {shouldValidate: true});
  };

  return {register, control, errors, handleClick, handleSecurityCodeChange};
};

export default useExperiments;
