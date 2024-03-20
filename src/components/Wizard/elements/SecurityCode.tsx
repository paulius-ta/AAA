import styled, {css} from 'styled-components';
import {dataSecurityCodeSingle} from '@data/dataSecurityCode.ts';
import colors from '@styles/colors.ts';
import {useState} from 'react';

interface ComponentProps extends CustomComponent {
  variant: 1 | 2 | 3;
}

const Root = styled.div`
  ${() => css`
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: ${colors.light};
    padding: 10px;
    border: 1px solid ${colors.neutral};
    border-radius: 5px;
  `};
`;

const Row = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    gap: 5px;
  `};
`;

const Checkbox = styled.input<{$variant: number; $placeholder: boolean}>`
  ${({$variant, $placeholder}) => css`
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid ${colors.neutral20};
    border-radius: 50%;
    background: ${colors.light};

      ${
        $placeholder &&
        css`
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            top: 0;
            left: 0;
            background: ${colors.neutral20};
            box-shadow: inset 0 0 0 2px ${colors.light};
          }
        `
      }

      &:checked {
          box-shadow: inset 0 0 0 2px ${colors.light};

          &:before {
              content: none;
          }

          ${
            $variant === 1 &&
            css`
              background: cyan;
            `
          }

          ${
            $variant === 2 &&
            css`
              background: magenta;
            `
          }

          ${
            $variant === 3 &&
            css`
              background: yellow;
            `
          }
  `};
`;

const SecurityCode = ({variant}: ComponentProps) => {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const getRandomPlaceholder = () => {
    return Math.random() < 0.1;
  };

  const removePlaceholder = () => {
    setIsPlaceholderVisible(false);
  };

  return (
    <Root>
      {dataSecurityCodeSingle.map(row => {
        return (
          <Row>
            {row.map(() => (
              <Checkbox
                type={'checkbox'}
                $variant={variant}
                $placeholder={getRandomPlaceholder() && isPlaceholderVisible}
                onChange={removePlaceholder}
              />
            ))}
          </Row>
        );
      })}
    </Root>
  );
};

export default SecurityCode;
