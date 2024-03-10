import ContactDetailsStep from '@components/Wizard/steps/ContactDetailsStep.tsx';
import PaymentDetailsStep from '@components/Wizard/steps/PaymentDetailsStep.tsx';
import PreviewStep from '@components/Wizard/steps/PreviewStep.tsx';

const wizardSteps = [
  {
    id: 0,
    component: ContactDetailsStep,
  },
  {
    id: 1,
    component: PaymentDetailsStep,
  },
  {
    id: 2,
    component: PreviewStep,
  },
];

export default wizardSteps;
