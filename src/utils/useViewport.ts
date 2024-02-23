import {useEffect, useState} from 'react';
import {size} from '@styles/breakpoints.ts';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= size.mobile;
  const isDesktop = width >= size.desktop;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return window.removeEventListener('resize', handleResize);
  }, []);

  return {isMobile, isDesktop};
};

export default useViewport;
