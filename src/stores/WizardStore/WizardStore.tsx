import {observable, action} from 'mobx';
import {
  ContactDetails,
  PaymentDetails,
  SecurityCodeDetails,
} from '@customTypes/model/apiTypes.ts';

class WizardStore {
  INITIAL_STEP = 0;

  @observable accessor step: number = this.INITIAL_STEP;

  @observable accessor validStep: number = this.INITIAL_STEP;

  @observable accessor bidAmount: Nullable<number> = null;

  @observable accessor contactDetails: ContactDetails = {
    name: '',
    phoneNumber: {
      prefix: '',
      number: null,
    },
    mailId: '',
    coordinates: {
      lat: {
        prefix1: '',
        prefix2: '',
        prefix3: '',
        coordinate: null,
      },
      long: {
        prefix1: '',
        prefix2: '',
        prefix3: '',
        coordinate: null,
      },
    },
  };

  @observable accessor paymentDetails: PaymentDetails = {
    paymentMethod: '',
    cardNumber: null,
  };

  @observable accessor securityCodeDetails: SecurityCodeDetails = {
    c: '0000000000000000000000000000000000000000000000000000000000000000',
    m: '0000000000000000000000000000000000000000000000000000000000000000',
    y: '0000000000000000000000000000000000000000000000000000000000000000',
  };

  @action setStep(step: number) {
    this.step = step;
  }

  @action setValidStep(step: number) {
    this.validStep = step;
  }

  @action setBidAmount(amount: number) {
    this.bidAmount = amount;
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

  @action updateSecurityCodeDetails(details: SecurityCodeDetails) {
    this.securityCodeDetails = {...this.securityCodeDetails, ...details};
  }
}

export default WizardStore;
