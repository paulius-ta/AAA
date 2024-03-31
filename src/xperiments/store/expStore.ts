import {createContext, useContext} from 'react';
import ExperimentStore from '@xperiments/store/ExperimentStore.ts';

interface Store {
  experimentStore: ExperimentStore;
}

export const store: Store = {
  experimentStore: new ExperimentStore(),
};

export const ExpStoreContext = createContext(store);

export const useExpStore = () => {
  return useContext(ExpStoreContext);
};
