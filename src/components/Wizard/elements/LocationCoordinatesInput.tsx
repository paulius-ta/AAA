import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {locationCoordinateOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';

const Root = styled.div`
  ${() => css`
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `};
`;

const Wrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `};
`;

const StyledSelect = styled(Select)`
  ${() => css`
    width: 100px;
    flex-shrink: 0;
  `};
`;

const LocationCoordinatesInput = () => {
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <Wrapper>
        <Wrapper>
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
        </Wrapper>
        <Input placeholder={'51.513373'} />
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
        </Wrapper>
        <Input placeholder={'-3.175622'} />
      </Wrapper>
    </Root>
  );
};

export default LocationCoordinatesInput;
