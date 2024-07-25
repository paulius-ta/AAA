import styled, {css} from 'styled-components';

const Root = styled.footer`
  ${() => css`
    width: 100%;
    height: 200px;
    background: #ff6a00;
  `};
`;

const Footer = () => {
  return <Root></Root>;
};

export default Footer;
