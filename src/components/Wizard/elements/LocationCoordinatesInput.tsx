import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {locationCoordinateOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import {UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
}

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

const LocationCoordinatesInput = ({register}: ComponentProps) => {
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <Wrapper>
        <Wrapper>
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
        </Wrapper>
        <Input
          placeholder={'51.513373'}
          register={register}
          name={'coordinates.lat.coordinate'}
        />
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
          <StyledSelect options={locationCoordinateOptions} />
        </Wrapper>
        <Input
          placeholder={'-3.175622'}
          register={register}
          name={'coordinates.long.coordinate'}
        />
      </Wrapper>
    </Root>
  );
};

export default LocationCoordinatesInput;
