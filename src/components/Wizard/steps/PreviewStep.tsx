import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import ContactDetailsBox from '@components/Wizard/elements/ContactDetailsBox.tsx';
import PaymentDetailsBox from '@components/Wizard/elements/PaymentDetailsBox.tsx';
import Button from '@components/ui/Button/Button.tsx';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconPreview} from '@assets/AssetsProvider.ts';
import Input from '@components/ui/Input/Input.tsx';
import usePreviewTransition from '@components/Wizard/transitions/usePreviewTransition.ts';

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
    margin-top: 10px;
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
  `};
`;

const PreviewStep = () => {
  const {handleTransition, register} = usePreviewTransition();
  return (
    <Root>
      <StyledIcon icon={iconPreview} />
      <ContactDetailsBox />
      <PaymentDetailsBox />
      <BottomContainer>
        <Input register={register} name={'bidAmount'} />
        <StyledButton w100 onClick={handleTransition}>
          Make a bid
        </StyledButton>
      </BottomContainer>
    </Root>
  );
};

export default PreviewStep;
