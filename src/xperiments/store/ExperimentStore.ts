import {observable, action} from 'mobx';

class ExperimentStore {
  @observable accessor securityCode: SecurityCodeType = {
    c: new Array(64).fill(false),
    m: new Array(64).fill(false),
    y: new Array(64).fill(false),
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
