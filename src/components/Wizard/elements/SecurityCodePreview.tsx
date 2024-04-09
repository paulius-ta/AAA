import styled, {css} from 'styled-components';
import useSecurityCodeDetails from '@hooks/useSecurityCodeDetails.ts';
import colors from '@styles/colors.ts';

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

const PreviewItem = styled.div<{
  $type: number;
  $c?: boolean;
  $m?: boolean;
  $y?: boolean;
}>`
  ${({$type, $c, $m, $y}) => css`
    position: relative;
    width: 100%;

    &:before {
      ${$type !== 0 &&
      css`
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
      `}
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      //width: 75%;
      //height: 75%;
      width: 100%;
      height: 100%;
      border-radius: 50%;

      ${$type === 0 &&
      css`
        width: 3px;
        height: 3px;
        background: ${colors.neutral20};
      `}

      ${$type === 1 &&
      css`
        ${$c && {background: 'cyan'}}
        ${$m && {background: 'magenta'}}
        ${$y && {background: 'yellow'}}
      `}

      ${$type === 2 &&
      css`
        ${$c &&
        $m &&
        css`
          background: linear-gradient(to right, cyan 50%, magenta 50%);
        `}

        ${$c &&
        $y &&
        css`
          background: linear-gradient(to right, cyan 50%, yellow 50%);
        `}

        ${$m &&
        $y &&
        css`
          background: linear-gradient(to right, magenta 50%, yellow 50%);
        `}
      `}

      ${$type === 3 &&
      css`
        background: conic-gradient(
          cyan 33.33%,
          magenta 33.33%,
          magenta 66.66%,
          yellow 66.66%
        );
      `}
    }
  `};
`;

const SecurityCodePreview = () => {
  const {createPreviewArray} = useSecurityCodeDetails();

  const previewArray = createPreviewArray();

  const getPreviewItem = (index: number) => {
    const valueArray = previewArray[index];
    const filteredValueArray = valueArray.filter(value => value);

    return (
      <PreviewItem
        key={index}
        $type={filteredValueArray.length}
        $c={valueArray[0]}
        $m={valueArray[1]}
        $y={valueArray[2]}
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
