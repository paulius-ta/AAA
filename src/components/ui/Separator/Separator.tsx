import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';

interface ComponentProps extends CustomComponent {
  space?: number;
  vertical?: boolean;
}

const Root = styled.div<{$margin: number; $vertical?: boolean}>`
  ${({$margin, $vertical}) => css`
    display: flex;
    height: 1px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background: ${colors.background};
    margin: ${$margin}px 0;

    ${$vertical &&
    css`
      height: unset;
      width: 1px;
      justify-self: stretch;
      margin: 0 ${$margin}px;
    `}
  `}
`;

const Separator = ({space = 0, className, vertical}: ComponentProps) => {
  return <Root className={className} $margin={space} $vertical={vertical} />;
};

export default Separator;
