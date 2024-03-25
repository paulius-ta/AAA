import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {locationCoordinateOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import {Control, UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';

interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
  control: Control<ContactDetails>;
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

const CoordinateContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    gap: 10px;
  `};
`;

const SelectContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `};
`;

const LocationCoordinatesInput = ({register, control}: ComponentProps) => {
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <CoordinateContainer>
        <SelectContainer>
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix1'}
          />
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix2'}
          />
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix3'}
          />
        </SelectContainer>
        <Input
          placeholder={'51.513373'}
          register={register}
          name={'coordinates.lat.coordinate'}
        />
      </CoordinateContainer>
      <CoordinateContainer>
        <SelectContainer>
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix1'}
          />
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix2'}
          />
          <Select
            width={80}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix3'}
          />
        </SelectContainer>
        <Input
          placeholder={'-3.175622'}
          register={register}
          name={'coordinates.long.coordinate'}
        />
      </CoordinateContainer>
    </Root>
  );
};

export default LocationCoordinatesInput;
