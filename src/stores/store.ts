import WizardStore from '@stores/WizardStore/WizardStore.tsx';
import {createContext, useContext} from 'react';

interface Store {
  wizardStore: WizardStore;
}

export const store: Store = {
  wizardStore: new WizardStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
