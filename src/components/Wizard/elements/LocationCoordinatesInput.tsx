import styled, {css} from 'styled-components';
import Label from '@components/ui/Label/Label.tsx';
import Select from '@components/ui/Select/Select.tsx';
import {locationCoordinateOptions} from '@data/dataContactDetailsForm.ts';
import Input from '@components/ui/Input/Input.tsx';
import {Control, FieldErrors, UseFormRegister} from 'react-hook-form';
import {ContactDetails} from '@customTypes/model/apiTypes.ts';
import breakpoints from '@styles/breakpoints.ts';
import useViewport from '@utils/useViewport.ts';

interface ComponentProps extends CustomComponent {
  register: UseFormRegister<ContactDetails>;
  control: Control<ContactDetails>;
  errors: FieldErrors<ContactDetails>;
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

    ${breakpoints.mobile`
      flex-direction: column;
    `}
  `};
`;

const SelectContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `};
`;

const LocationCoordinatesInput = ({
  register,
  control,
  errors,
}: ComponentProps) => {
  const {isDesktop} = useViewport();
  return (
    <Root>
      <Label>cosmic phone number:</Label>
      <CoordinateContainer>
        <SelectContainer>
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix1'}
            error={errors.coordinates?.lat?.prefix1?.message}
          />
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix2'}
            error={errors.coordinates?.lat?.prefix2?.message}
          />
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.lat.prefix3'}
            error={errors.coordinates?.lat?.prefix3?.message}
          />
        </SelectContainer>
        <Input
          placeholder={'51.513373'}
          register={register}
          name={'coordinates.lat.coordinate'}
          error={errors.coordinates?.lat?.coordinate?.message}
        />
      </CoordinateContainer>
      <CoordinateContainer>
        <SelectContainer>
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix1'}
            error={errors.coordinates?.long?.prefix1?.message}
          />
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix2'}
            error={errors.coordinates?.long?.prefix2?.message}
          />
          <Select
            width={isDesktop ? 80 : undefined}
            options={locationCoordinateOptions}
            control={control}
            name={'coordinates.long.prefix3'}
            error={errors.coordinates?.long?.prefix3?.message}
          />
        </SelectContainer>
        <Input
          placeholder={'-3.175622'}
          register={register}
          name={'coordinates.long.coordinate'}
          error={errors.coordinates?.long?.coordinate?.message}
        />
      </CoordinateContainer>
    </Root>
  );
};

export default LocationCoordinatesInput;
