/* eslint-disable array-callback-return */
import { IProduct } from 'components/containers/ShopContainer/interface';
import { request } from 'network';
import React, { useEffect, useState } from 'react';

export function useRaiting(): [Array<IProduct>, boolean] {
  const [raiting, setRaiting] = useState([]);
  const [data, setData] = useState([]);
  const [raitingData, setRaitingData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    request({
      url: '/reviews',
    })
      .then((el) => {
        setRaiting(el);
        setLoading(false);
      })
      .catch((el) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);

    request({ url: 'product' })
      .then((el) => {
        setData(el);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length && raiting.length) {
      const full = data
        .map((el: any) => {
          const rait = raiting.filter((elem: any) => elem.product_id === el.id);
          return {
            ...el,
            raiting: rait,
          };
        })
        .filter((el) => (el.raiting.length > 0 ? el : ''));

      setRaitingData(full);
    }
  }, [data, raiting]);

  return [raitingData, loading];
}
