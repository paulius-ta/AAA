import styled, {css} from 'styled-components';
import NavigatorItem from '@components/WizardNavigator/elements/NavigatorItem.tsx';

const Root = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const WizardNavigator = () => {
  return (
    <Root>
      {Array(3)
        .fill(undefined)
        .map((_, index) => {
          return (
            <NavigatorItem
              index={index + 1}
              active={index === 0}
              disabled={index === 2}
            />
          );
        })}
    </Root>
  );
};

export default WizardNavigator;
