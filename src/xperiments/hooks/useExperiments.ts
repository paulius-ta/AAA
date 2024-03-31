import {Resolver, useForm} from 'react-hook-form';
import {useExpStore} from '@xperiments/store/expStore.ts';

import {object, array, boolean} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const securityCodeSchema = object().shape({
  c: array()
    .of(boolean())
    .test('at-least-one-true', array => array?.some(item => item)),
  m: array()
    .of(boolean())
    .test('at-least-one-true', array => array?.some(item => item)),
  y: array()
    .of(boolean())
    .test('at-least-one-true', array => array?.some(item => item)),
});

const useExperiments = () => {
  const {experimentStore} = useExpStore();

  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SecurityCodeType>({
    resolver: yupResolver(securityCodeSchema) as Resolver<SecurityCodeType>,
    defaultValues: experimentStore.securityCode,
  });

  const handleClick = handleSubmit(
    data => {
      console.log(data);
      experimentStore.updateSecurityCode(data);
    },
    () => {
      console.log(errors);
    }
  );

  return {register, control, errors, handleClick};
};

export default useExperiments;
