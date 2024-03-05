import styled, {css} from 'styled-components';
import 'swiper/swiper-bundle.css';
import useImageSlider from '@hooks/useImageSlider.ts';
import colors from '@styles/colors.ts';

interface ImageUrl {
  url: string;
}

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

    swiper-slide {
      img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
        overflow: hidden;
      }
    }
  `};
`;

const Pagination = styled.div`
  ${() => css`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    gap: 15px;

    .custom-bullet {
      position: relative;
      height: 30px;
      width: 30px;
      border-radius: 5px;
      background: ${colors.primaryAction};

      &--active:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: ${colors.primaryOnAction};
      }
    }
  `};
`;

const NavigationNext = styled.div`
  ${() => css`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    margin: 0 10px;
    background: url('/src/assets/icons/ic_chevron-right.svg') no-repeat center;
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
              <img src={image.url} alt={`artifact-${index}`} />
            </swiper-slide>
          ))}
        </swiper-container>

        <NavigationPrev id={'customPrev'} />
        <NavigationNext id={'customNext'} />
      </SwiperWrapper>

      <Pagination id={'customPagination'}></Pagination>
    </Root>
  );
};

export default ImageSlider;
