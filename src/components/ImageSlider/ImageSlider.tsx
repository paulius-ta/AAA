import styled, {css} from 'styled-components';
import 'swiper/swiper-bundle.css';
import useImageSlider from '@hooks/useImageSlider.ts';
import {ImageUrl} from '@customTypes/model/apiTypes.ts';
import Icon from '@components/ui/Icon/Icon.tsx';
import {iconChevronRight} from '@assets/AssetsProvider.ts';

interface ComponentProps extends CustomComponent {
  images: ImageUrl[];
}

const Root = styled.div`
  ${() => css`
    min-width: 0;
    aspect-ratio: 1;
  `};
`;

const SwiperWrapper = styled.div`
  ${() => css`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 0;
    min-width: 0;

    swiper-container {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
  `};
`;

const Image = styled.img`
  ${() => css`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  `};
`;

const NavigationNext = styled.div`
  ${() => css`
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    margin: 0 10px;
    z-index: 1;

    &.swiper-button-disabled {
      visibility: hidden;
    }
  `};
`;

const NavigationPrev = styled(NavigationNext)`
  ${() => css`
    left: 0;
    transform: translateY(-50%) rotate(180deg);
  `};
`;

const ImageSlider = ({images}: ComponentProps) => {
  const {swiperRef} = useImageSlider();

  return (
    <Root>
      <SwiperWrapper>
        <swiper-container ref={swiperRef} init={false}>
          {images.map((image, index) => (
            <swiper-slide key={index}>
              <Image src={image.url} alt={`artifact-${index}`} />
            </swiper-slide>
          ))}
        </swiper-container>

        <NavigationPrev id={'customPrev'}>
          <Icon icon={iconChevronRight} size={42} />
        </NavigationPrev>
        <NavigationNext id={'customNext'}>
          <Icon icon={iconChevronRight} size={42} />
        </NavigationNext>
      </SwiperWrapper>
    </Root>
  );
};

export default ImageSlider;
