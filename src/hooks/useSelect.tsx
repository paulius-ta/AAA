import {components, DropdownIndicatorProps} from 'react-select';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconSelectArrow} from '@assets/AssetsProvider.ts';

const useSelect = (options: SelectOption[]) => {
  const DropdownIndicator = (props: DropdownIndicatorProps<SelectOption>) => (
    <components.DropdownIndicator {...props}>
      <Icon icon={iconSelectArrow} size={10} />
    </components.DropdownIndicator>
  );

  const config = {
    isMulti: false,
    placeholder: false,
    isSearchable: false,
    classNamePrefix: 'select',
    options: options,
    components: {DropdownIndicator: DropdownIndicator},
  };

  return {config};
};

export default useSelect;
