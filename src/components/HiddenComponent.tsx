import useExtendableContent from '@hooks/useExtendableContent.ts';
import {ReactNode} from 'react';
import styled, {css} from 'styled-components';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconHide, iconPreview} from '@assets/AssetsProvider.ts';
import Label from '@components/ui/Label/Label.tsx';

interface ComponentProps extends CustomComponent {
  children: ReactNode;
  label?: string;
}

const Root = styled.div<{$hasLabel?: boolean}>`
  ${({$hasLabel}) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${$hasLabel &&
    css`
      position: relative;
    `}
  `};
`;

const LeftContainer = styled.div<{$hasLabel: boolean}>`
  ${({$hasLabel}) => css`
    flex-basis: calc(100% - 20px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 0.1s;

    &.open {
      max-height: 1000px;
    }

    &.closed {
      max-height: 0;
      overflow: hidden;
    }

    ${$hasLabel &&
    css`
      padding-top: 20px;
    `}
  `};
`;

const StyledLabel = styled(Label)`
  ${() => css`
    top: 0;
  `};
`;

const RightContainer = styled.div`
  ${() => css``};
`;

const IconWrapper = styled.div`
  ${() => css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `};
`;

const HiddenComponent = ({children, label}: ComponentProps) => {
  const {isOpen, onClick} = useExtendableContent(true);

  return (
    <Root $hasLabel={!!label}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <LeftContainer className={isOpen ? 'open' : 'closed'} $hasLabel={!!label}>
        {children}
      </LeftContainer>
      <RightContainer>
        <IconWrapper onClick={() => onClick()}>
          <Icon icon={isOpen ? iconHide : iconPreview} />
        </IconWrapper>
      </RightContainer>
    </Root>
  );
};

export default HiddenComponent;
