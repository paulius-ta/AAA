import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Text from '@components/ui/Text/Text.tsx';
import Accordion from '@components/Accordion/Accordion.tsx';
import {iconContact} from '@assets/AssetsProvider.ts';

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    display: flex;
  `};
`;

const ContactDetailsBox = () => {
  return (
    <Root secondary>
      <Accordion icon={iconContact}>
        <Row>
          <Text>TEST</Text>
        </Row>
        <Row>
          <Text>TEST</Text>
        </Row>
        <Row>
          <Text>TEST</Text>
        </Row>
        <Row>
          <Text>TEST</Text>
        </Row>
      </Accordion>
    </Root>
  );
};

export default ContactDetailsBox;
