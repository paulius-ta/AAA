import ContactDetailsStep from '@components/Wizard/steps/ContactDetailsStep.tsx';
import PaymentDetailsStep from '@components/Wizard/steps/PaymentDetailsStep.tsx';
import PreviewStep from '@components/Wizard/steps/PreviewStep.tsx';
import {iconContact, iconPayment, iconPreview} from '@assets/AssetsProvider.ts';

const wizardSteps = [
  {
    id: 0,
    component: ContactDetailsStep,
    icon: iconContact,
  },
  {
    id: 1,
    component: PaymentDetailsStep,
    icon: iconPayment,
  },
  {
    id: 2,
    component: PreviewStep,
    icon: iconPreview,
  },
];

export default wizardSteps;
