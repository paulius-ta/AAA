import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Header from '@components/ui/Header/Header.tsx';
import colors from '@styles/colors.ts';
interface ComponentProps extends CustomComponent {
  identifier: number;
}

const Root = styled(Box)``;

const HeaderWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    padding: 10px;
    background: ${colors.background};
    border-radius: 5px;
  `};
`;

const IdentifierBox = ({identifier}: ComponentProps) => {
  return (
    <Root>
      <HeaderWrapper>
        <Header>#{identifier}</Header>
      </HeaderWrapper>
    </Root>
  );
};

export default IdentifierBox;
