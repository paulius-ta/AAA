import {useEffect, useRef} from 'react';
import {register} from 'swiper/element/bundle';
import {SwiperContainer} from 'swiper/element/bundle';

const useImageSlider = () => {
  const swiperRef = useRef<SwiperContainer>(null);

  useEffect(() => {
    register();
    initializeSwiper();
  }, []);

  const initializeSwiper = () => {
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: '20',
      // pagination: {
      //   el: '#customPagination',
      //   clickable: true,
      //   bulletElement: 'div',
      //   bulletClass: 'custom-bullet',
      //   bulletActiveClass: 'custom-bullet--active',
      // },
      navigation: {nextEl: '#customNext', prevEl: '#customPrev'},
      breakpoints: {},
      on: {
        init() {},
      },
    };

    Object.assign(swiperRef.current!, swiperParams);

    if (swiperRef.current) swiperRef.current.initialize();
  };

  return {
    swiperRef,
  };
};

export default useImageSlider;
