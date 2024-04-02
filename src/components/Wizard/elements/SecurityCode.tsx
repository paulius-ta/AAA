import styled, {css} from 'styled-components';
import colors from '@styles/colors.ts';
import {Control, Controller, Path} from 'react-hook-form';

interface ComponentProps extends CustomComponent {
  control: Control<SecurityCodeType>;
  name: Path<SecurityCodeType>;
  onChange: (name: Path<SecurityCodeType>, index: number, char: string) => void;
  error?: string;
}

const Root = styled.div<{$error: boolean}>`
  ${({$error}) => css`
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1;
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

const CheckboxWrapper = styled.div<{$variant: string}>`
  ${({$variant}) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 5px;

    > input {
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

        ${$variant === 'c' &&
        css`
          background: cyan;
        `}

        ${$variant === 'm' &&
        css`
          background: magenta;
        `}

              ${$variant === 'y' &&
        css`
          background: yellow;
        `}
      }
    }
  `};
`;

const SecurityCode = ({control, name, onChange, error}: ComponentProps) => {
  const handleChange = (index: number, value: string) => {
    onChange(name, index, value);
  };

  return (
    <Root $error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({field: {value, ref}}) => (
          <CheckboxWrapper $variant={name}>
            {Array(64)
              .fill(0)
              .map((_, index) => {
                return (
                  <input
                    key={`checkbox-${index}`}
                    type="checkbox"
                    ref={ref}
                    checked={value.charAt(index) === '1'}
                    onChange={e => {
                      handleChange(index, e.target.checked ? '1' : '0');
                    }}
                  />
                );
              })}
          </CheckboxWrapper>
        )}
      />
    </Root>
  );
};

export default SecurityCode;
