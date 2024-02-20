import {makeObservable, observable} from 'mobx';

class WizardStore {
  INITIAL_STEP = 0;

  @observable step = this.INITIAL_STEP;

  constructor() {
    makeObservable(this);
  }
}

export default WizardStore;
