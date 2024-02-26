import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  space?: number;
}

const Root = styled.div<{$margin: number}>`
  ${({$margin}) => css`
    display: flex;
    height: 1px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background: ${colors.primarySeparator};
    margin: ${$margin}px 0;
  `}
`;

const Separator = ({space = 0, className}: ComponentProps) => {
  return <Root $margin={space} className={className} />;
};

export default Separator;
