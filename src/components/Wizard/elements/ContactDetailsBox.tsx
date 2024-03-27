import styled, {css} from 'styled-components';
import Box from '@components/ui/Box/Box.tsx';
import Text from '@components/ui/Text/Text.tsx';
import Accordion from '@components/Accordion/Accordion.tsx';
import {iconContact} from '@assets/AssetsProvider.ts';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
import Label from '@components/ui/Label/Label.tsx';
import colors from '@styles/colors.ts';
import Attribute from '@components/DescriptionBox/elements/Attribute.tsx';
import Separator from '@components/ui/Separator/Separator.tsx';

interface ComponentProps extends CustomComponent {
  data: ContactDetails;
}

const Root = styled(Box)``;

const Row = styled.div`
  ${() => css`
    position: relative;
    display: flex;
    gap: 5px;
    &:not(:last-of-type) {
      margin-top: 20px;
    }
  `};
`;

const StyledText = styled(Text)`
  ${() => css`
    width: fit-content;
    background: ${colors.boxBackground};
    letter-spacing: 0.3rem;
  `};
`;

const StyledSeparator = styled(Separator)`
  ${() => css`
    background: ${colors.boxBackground};
  `};
`;

const Prefix = styled(Attribute)`
  ${() => css`
    background: ${colors.boxBackground};
    font-size: 14px;
  `};
`;

const ContactDetailsBox = ({data}: ComponentProps) => {
  return (
    <Root secondary>
      <Accordion icon={iconContact}>
        <Row>
          <Label>Name:</Label>
          <StyledText boxed>{data.name}</StyledText>
        </Row>
        <StyledSeparator />
        <Row>
          <Label>Cosmic mail identifier:</Label>
          <StyledText boxed>{data.mailId}</StyledText>
        </Row>
        <StyledSeparator />
        <Row>
          <Label>cosmic phone number:</Label>
          <Prefix>{data.phoneNumber.prefix}</Prefix>
          <StyledText boxed>{data.phoneNumber.number}</StyledText>
        </Row>
        <StyledSeparator />
        <Row>
          <Label>Cosmic Location coordinates:</Label>
          <Prefix>{data.coordinates.lat.prefix1}</Prefix>
          <Prefix>{data.coordinates.lat.prefix2}</Prefix>
          <Prefix>{data.coordinates.lat.prefix3}</Prefix>
          <StyledText boxed>{data.coordinates.lat.coordinate}</StyledText>
        </Row>
        <Row>
          <Prefix>{data.coordinates.long.prefix1}</Prefix>
          <Prefix>{data.coordinates.long.prefix2}</Prefix>
          <Prefix>{data.coordinates.long.prefix3}</Prefix>
          <StyledText boxed>{data.coordinates.long.coordinate}</StyledText>
        </Row>
      </Accordion>
    </Root>
  );
};

export default ContactDetailsBox;
