import {observer} from 'mobx-react-lite';
import useWizard from '@hooks/useWizard.ts';
import ContactDetailsStep from '@components/Wizard/steps/ContactDetailsStep.tsx';
import PaymentDetailsStep from '@components/Wizard/steps/PaymentDetailsStep.tsx';
import PreviewStep from '@components/Wizard/steps/PreviewStep.tsx';
import c from 'classnames';

const Wizard = observer(() => {
  const {getCurrentStep} = useWizard();
  const step = getCurrentStep()?.id;

  return (
    <>
      <ContactDetailsStep className={c({'display-none': step !== 0})} />
      <PaymentDetailsStep className={c({'display-none': step !== 1})} />
      <PreviewStep className={c({'display-none': step !== 2})} />
    </>
  );
});

export default Wizard;
