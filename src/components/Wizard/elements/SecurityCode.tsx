import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import {Control, Path, UseFormRegister} from 'react-hook-form';

interface ComponentProps extends CustomComponent {
  variant: 'c' | 'm' | 'y';
  register: UseFormRegister<SecurityCodeType>;
  control: Control<SecurityCodeType>;
  name: Path<SecurityCodeType>;
  error?: string;
}

const Root = styled.div<{$error: boolean}>`
  ${({$error}) => css`
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 5px;
    background: ${colors.light};
    padding: 10px;
    border: 1px solid ${colors.neutral};
    border-radius: 5px;

    ${$error &&
    css`
      border: 1px solid ${colors.error};
    `}
  `};
`;

const Checkbox = styled.input<{$variant: string}>`
  ${({$variant}) => css`
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

      &:checked {
          box-shadow: inset 0 0 0 2px ${colors.light};

          &:before {
              content: none;
          }

          ${
            $variant === 'c' &&
            css`
              background: cyan;
            `
          }

          ${
            $variant === 'm' &&
            css`
              background: magenta;
            `
          }

          ${
            $variant === 'y' &&
            css`
              background: yellow;
            `
          }
  `};
`;

const SecurityCode = ({variant, register, name, error}: ComponentProps) => {
  return (
    <Root $error={!!error}>
      {new Array(64).fill(0).map((_, index) => {
        return (
          <Checkbox
            key={`security-checkbox-${name}-${index}`}
            type="checkbox"
            $variant={variant}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            {...register(`${name}.${index}`)}
          />
        );
      })}
    </Root>
  );
};

export default SecurityCode;
