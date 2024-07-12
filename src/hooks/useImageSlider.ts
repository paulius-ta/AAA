import {useEffect, useRef} from 'react';
import {register} from 'swiper/element/bundle';
import {SwiperOptions, Swiper} from 'swiper/types';
import {renderCustomBullet} from '@utils/renderCustomBullet.ts';
import useViewport from '@utils/useViewport.ts';

const useImageSlider = () => {
  const {isDesktop} = useViewport();
  const swiperRef = useRef<
    HTMLElement & {swiper?: Swiper; initialize: () => void}
  >(null);

  useEffect(() => {
    register();
    initializeSwiper();
  }, []);

  const initializeSwiper = () => {
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '#customNext',
        prevEl: '#customPrev',
      },
      breakpoints: {},
      on: {
        init() {},
      },
    };

    if (isDesktop) {
      swiperParams.pagination = {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 4,
        renderBullet: renderCustomBullet,
      };
    }

    Object.assign(swiperRef.current!, swiperParams);

    if (swiperRef.current) swiperRef.current.initialize();
  };

  return {
    swiperRef,
  };
};

export default useImageSlider;
