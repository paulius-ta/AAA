import {observable, action} from 'mobx';

class ExperimentStore {
  @observable accessor securityCode: SecurityCodeType = {
    c: '0000000000000000000000000000000000000000000000000000000000000000',
    m: '0000000000000000000000000000000000000000000000000000000000000000',
    y: '0000000000000000000000000000000000000000000000000000000000000000',
  };

  @action updateSecurityCode(details: SecurityCodeType) {
    this.securityCode = {
      ...this.securityCode, // Preserve other potential properties
      c: details.c,
      m: details.m,
      y: details.y,
    };
  }
}

export default ExperimentStore;
