import {useStore} from '@stores/store.ts';
import {observer} from 'mobx-react-lite';

const Wizard = observer(() => {
  const {wizardStore} = useStore();

  return <div>{wizardStore.step}</div>;
});

export default Wizard;
