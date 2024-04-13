import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import ContactDetailsBox from '@components/Wizard/elements/ContactDetailsBox.tsx';
import PaymentDetailsBox from '@components/Wizard/elements/PaymentDetailsBox.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconPreview} from '@assets/AssetsProvider.ts';
import Input from '@components/ui/Input/Input.tsx';
import usePreviewTransition from '@components/Wizard/transitions/usePreviewTransition.ts';
import {dataHistory} from '@data/dataHistory.ts';
import HistoryBox from '@components/HistoryBox/HistoryBox.tsx';

interface ComponentProps extends CustomComponent {}

const Root = styled(Box)`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `};
`;

const StyledButton = styled(Button)`
  ${() => css`
    align-self: flex-end;
  `};
`;

const StyledIcon = styled(Icon)`
  ${() => css`
    align-self: center;
  `};
`;

const BottomContainer = styled.div`
  ${() => css`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `};
`;

const PreviewStep = ({className}: ComponentProps) => {
  const {handleTransition, register, contactDetails, paymentDetails} =
    usePreviewTransition();

  return (
    <Root className={className}>
      <StyledIcon icon={iconPreview} />
      <ContactDetailsBox data={contactDetails} />
      <PaymentDetailsBox data={paymentDetails} />
      <BottomContainer>
        <Input register={register} name={'bidAmount'} />
        <StyledButton w100 onClick={handleTransition}>
          Make a bid
        </StyledButton>
        <HistoryBox data={dataHistory} secondary isAutoCollapsed />
      </BottomContainer>
    </Root>
  );
};

export default PreviewStep;
