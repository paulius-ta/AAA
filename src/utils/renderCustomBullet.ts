import {Swiper} from 'swiper/types';

export function renderCustomBullet(
  this: Swiper,
  index: number,
  className: string
): string {
  const slide = this.slides[index] as HTMLElement;
  const img = slide.querySelector('img') as HTMLImageElement;
  return `<div class="${className}"><img src="${img.src}" alt="image-${index + 1}"/></div>`;
}
