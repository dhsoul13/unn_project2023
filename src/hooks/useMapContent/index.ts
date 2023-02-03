/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';

export function useMapContent(url: string) {
  const [mapContent, setMapContent] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(url)
      .then((el) => el.json())
      .then((el) => {
        setMapContent(el);
      });
  }, []);

  return [mapContent];
}
