/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import { request } from 'network';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { getMoney } from 'utils/getMoney';

type TUseElemForList = [string, any, any];

async function requestElem(id: string, fun: any, loading: any) {
  await request({
    url: '/product',
    params: {
      id,
    },
  })
    .then((el) => {
      if (el.length) {
        fun((prev: any) => [...prev, el[0]]);
      }
    })
    .catch(() => {});
}

export const useElemForList = (src: string, id: string | number) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    request({ url: src, params: { id } })
      .then((el) => {
        setLoading(true);
        el[0].product.forEach(async (el: any) => {
          await requestElem(el, setData, setLoading);
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    return () => {
      setData([]);
    };
  }, []);

  const deleteElem = useCallback(
    (el: any) => {
      const newmas = data.filter((elem: any) => elem.id != el.id);
      const body = newmas.map((elem: any) => elem.id);

      request({
        method: 'PUT',
        url: `/${src}/${id}`,
        body: JSON.stringify({
          id: el.id,
          product: [...body],
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((elem) => {
        console.log(elem);
      });

      setData(newmas);
    },
    [data]
  );

  const getPrice = useMemo(
    () =>
      data.reduce((acc, elem) => {
        if (!elem.discount.isDiscount) {
          return acc + elem.price;
        }
        return (
          acc +
          getMoney({
            number: elem.price,
            dicsount: elem.discount.count,
          })
        );
      }, 0),
    [data]
  );

  const getPriceWithoutSale = useMemo(() => data.reduce((acc, el) => acc + el.price, 0), [data]);

  return {
    data,
    loading,
    deleteElem,
    getPrice,
    getPriceWithoutSale,
  };
};
