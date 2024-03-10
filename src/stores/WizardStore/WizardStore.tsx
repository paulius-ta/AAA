import {observable, action} from 'mobx';

class WizardStore {
  INITIAL_STEP = 0;

  @observable accessor step = this.INITIAL_STEP;

  @action setStep(step: number) {
    this.step = step;
  }
}

export default WizardStore;
