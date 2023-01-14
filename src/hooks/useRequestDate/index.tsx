/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';

export default function useRequestData<T>(url: string) {
  const [data, setData] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((el) => el.json())
      .then((el: T[]) => {
        setData(el);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}
