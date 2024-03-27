import {useState} from 'react';

const useExtendableContent = (isAutoCollapsed = false) => {
  const [isOpen, setIsOpen] = useState(
    isAutoCollapsed ? !isAutoCollapsed : true
  );

  const onClick = () => {
    setIsOpen(prev => !prev);
  };

  return {onClick, isOpen, setIsOpen};
};

export default useExtendableContent;
