import styled, {css} from 'styled-components';

const Root = styled.div`
  ${() => css`
    padding: 50px 0;
    width: 100%;
    height: 100%;
  `};
`;

const ExperimentsPage = () => {
  return <Root></Root>;
};

export default ExperimentsPage;
