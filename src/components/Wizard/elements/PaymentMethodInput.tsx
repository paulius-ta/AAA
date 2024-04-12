import styled, {css} from 'styled-components';
import {PaymentDetails, PaymentMethods} from '@customTypes/model/apiTypes.ts';
import Label from '@components/ui/Label/Label.tsx';
import colors from '@styles/colors.ts';
import {Path, UseFormRegister} from 'react-hook-form';

interface ComponentProps extends CustomComponent {
  data: PaymentMethods;
  register: UseFormRegister<PaymentDetails>;
  name: Path<PaymentDetails>;
  error?: string;
}

const Root = styled.div`
  position: relative;
  margin-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`;

const Method = styled.label`
  ${() => css`
    position: relative;
    display: inline-block;
    cursor: pointer;

    &.error {
      outline: 1px solid ${colors.error};
      border-radius: 5px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: grayscale(100%);
      opacity: 0.3;
      border-radius: 5px;
    }

    input[type='radio'] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;

      &:checked + img {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  `};
`;

const PaymentMethodInput = ({data, error, register, name}: ComponentProps) => {
  return (
    <Root>
      <Label>Payment method:</Label>
      {data.map((method, index) => (
        <Method
          key={`${index}-payment-method`}
          className={error ? 'error' : ''}
        >
          <input type={'radio'} value={method.value} {...register(name)} />
          <img src={method.url} alt={method.value} />
        </Method>
      ))}
    </Root>
  );
};

export default PaymentMethodInput;
