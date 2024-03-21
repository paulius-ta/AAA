import styled from 'styled-components';
import {PaymentMethods} from '@customTypes/model/apiTypes.ts';
import Label from '@components/ui/Label/Label.tsx';
import {useStore} from '@stores/store.ts';
import {observer} from 'mobx-react-lite';
import {ChangeEvent} from 'react';

interface ComponentProps extends CustomComponent {
  data: PaymentMethods;
}

const Root = styled.div`
  position: relative;
  margin-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`;

const Method = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
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
`;

const PaymentMethodInput = observer(({data}: ComponentProps) => {
  const {wizardStore} = useStore();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    wizardStore.setPaymentMethod(e.target.value);
  };

  return (
    <Root>
      <Label>Payment method:</Label>
      {data.map((method, index) => (
        <Method key={`${index}-payment-method`}>
          <input
            type={'radio'}
            name={'payment-method'}
            value={method.value}
            id={`payment-method-${index}`}
            onChange={handleOnChange}
          />
          <img src={method.url} alt={method.value} />
        </Method>
      ))}
    </Root>
  );
});

export default PaymentMethodInput;
