import styled, {css} from 'styled-components';
import Icon from '@components/ui/Icon/Icon.tsx';
import useExtendableContent from '@hooks/useExtendableContent.ts';
import {iconChevronDown} from '@assets/AssetsProvider.ts';
import {FunctionComponent, ReactNode} from 'react';
interface ComponentProps extends CustomComponent {
  children: ReactNode;
  icon?: FunctionComponent<SimpleObject>;
  component?: ReactNode;
  isAutoCollapsed?: boolean;
}

const Root = styled.div``;

const TopContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
  `};
`;

const BottomContainer = styled.div`
  ${() => css`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 0.1s;

    &.open {
      margin-top: 20px;
      max-height: 1000px;
    }

    &.closed {
      max-height: 0;
      overflow: hidden;
      margin-top: 0;
    }
  `};
`;

const IconWrapper = styled.div`
  ${() => css`
    margin-left: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
  `};
`;

const StyledIcon = styled(Icon)<{$isOpen: boolean}>`
  ${({$isOpen}) => css`
    ${$isOpen &&
    css`
      transform: rotate(180deg);
    `}
  `};
`;

const Accordion = ({
  children,
  icon,
  component,
  isAutoCollapsed,
}: ComponentProps) => {
  const {isOpen, onClick} = useExtendableContent(isAutoCollapsed);
  return (
    <Root>
      <TopContainer>
        {icon && !component && <Icon icon={icon} />}
        {!icon && component && component}
        <IconWrapper onClick={() => onClick()}>
          <StyledIcon icon={iconChevronDown} $isOpen={isOpen} />
        </IconWrapper>
      </TopContainer>
      <BottomContainer className={isOpen ? 'open' : 'closed'}>
        {children}
      </BottomContainer>
    </Root>
  );
};

export default Accordion;
