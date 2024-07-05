import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Header from '@components/ui/Header/Header.tsx';
import colors from '@styles/colors.ts';
import {useNavigate} from 'react-router-dom';
import routerPaths from '@config/routerPaths.ts';
interface ComponentProps extends CustomComponent {
  identifier: number;
}

const Root = styled(Box)``;

const HeaderContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    padding: 10px;
    background: ${colors.background};
    border-radius: 5px;
  `};
`;

const HeaderWrapper = styled.div`
  ${() => css`
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-position: under;
    }
  `};
`;

const IdentifierBox = ({identifier}: ComponentProps) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate({pathname: routerPaths.home()});
  };

  return (
    <Root>
      <HeaderContainer>
        <HeaderWrapper onClick={handleRedirect}>
          <Header>#{identifier}</Header>
        </HeaderWrapper>
      </HeaderContainer>
    </Root>
  );
};

export default IdentifierBox;
