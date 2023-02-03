/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { scrollTo, scrollIntoView } from 'scroll-js';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlerScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const scrollFormCoordinate = (cordinate: number) => {
    scrollTo(window, { top: 0 });
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return { scrollPosition, scrollFormCoordinate };
};
