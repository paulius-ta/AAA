import {observable, action} from 'mobx';
import {ContactDetails, PaymentDetails} from '@customTypes/model/apiTypes.ts';

class WizardStore {
  INITIAL_STEP = 0;

  @observable accessor step = this.INITIAL_STEP;

  @observable accessor contactDetails: ContactDetails = {
    name: '',
    phoneNumber: {
      prefix: '',
      number: null,
    },
    mailId: '',
    coordinates: {
      lat: null,
      long: null,
    },
  };

  @observable accessor paymentDetails: PaymentDetails = {
    paymentMethod: '',
    cardNumber: null,
    securityCode: [],
  };

  @action setStep(step: number) {
    this.step = step;
  }

  @action setPaymentMethod(method: string) {
    this.paymentDetails.paymentMethod = method;
  }

  @action updateContactDetails(details: ContactDetails) {
    this.contactDetails = {...this.contactDetails, ...details};
  }

  @action updatePaymentDetails(details: PaymentDetails) {
    this.paymentDetails = {...this.paymentDetails, ...details};
  }
}

export default WizardStore;
