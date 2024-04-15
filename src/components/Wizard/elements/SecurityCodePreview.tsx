import styled, {css} from 'styled-components';
import useSecurityCodeDetails from '@hooks/useSecurityCodeDetails.ts';
import colors from '@styles/colors.ts';
import c from 'classnames';

const Root = styled.div`
  ${() => css`
    width: 100%;
    max-width: 200px;
    aspect-ratio: 1;
    border: 1px solid ${colors.neutral20};
    border-radius: 5px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 5px;
  `};
`;

const PreviewItem = styled.div`
  ${() => css`
    position: relative;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75%;
      height: 75%;
      background: ${colors.background};
      border-radius: 50%;
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    &.type0 {
      &:after {
        width: 3px;
        height: 3px;
        background: ${colors.neutral20};
      }

      &:before {
        all: unset;
      }
    }

    &.type1.c {
      &:after {
        background: cyan;
      }
    }

    &.type1.m {
      &:after {
        background: magenta;
      }
    }

    &.type1.y {
      &:after {
        background: yellow;
      }
    }

    &.type2.c.m {
      &:after {
        background: linear-gradient(to right, cyan 50%, magenta 50%);
      }
    }

    &.type2.c.y {
      &:after {
        background: linear-gradient(to right, cyan 50%, yellow 50%);
      }
    }

    &.type2.m.y {
      &:after {
        background: linear-gradient(to right, magenta 50%, yellow 50%);
      }
    }

    &.type3 {
      &:after {
        background: conic-gradient(
          cyan 33.33%,
          magenta 33.33%,
          magenta 66.66%,
          yellow 66.66%
        );
      }
    }
  `};
`;

const SecurityCodePreview = () => {
  const {createPreviewArray} = useSecurityCodeDetails();

  const previewArray = createPreviewArray();

  const getPreviewItem = (index: number) => {
    const valueArray = previewArray[index];
    const type = valueArray.filter(value => value).length;

    return (
      <PreviewItem
        key={index}
        className={c({
          type0: type === 0,
          type1: type === 1,
          type2: type === 2,
          type3: type === 3,
          c: valueArray[0],
          m: valueArray[1],
          y: valueArray[2],
        })}
      />
    );
  };

  return (
    <Root>
      {previewArray.map((_, index) => {
        return getPreviewItem(index);
      })}
    </Root>
  );
};

export default SecurityCodePreview;
