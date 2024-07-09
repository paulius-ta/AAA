import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const useScrollingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const clone = content.cloneNode(true) as HTMLElement;
    container.appendChild(clone);

    const tl = gsap.timeline();

    const animate = () => {
      tl.to([content, clone], {
        xPercent: -100,
        repeat: -1,
        duration: 40,
        ease: 'linear',
      });
    };

    animate();

    return () => {
      tl.kill();
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, []);

  return {containerRef, contentRef};
};

export default useScrollingText;
