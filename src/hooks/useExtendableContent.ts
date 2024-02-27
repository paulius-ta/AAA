import {useState} from 'react';

const useExtendableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(prev => !prev);
  };

  return {onClick, isOpen, setIsOpen};
};

export default useExtendableContent;
