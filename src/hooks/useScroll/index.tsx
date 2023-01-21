/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlerScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const removeEventListener = () => {
    window.removeEventListener('scroll', handlerScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []);

  return { scrollPosition, removeEventListener };
};
