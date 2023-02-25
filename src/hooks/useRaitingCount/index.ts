/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import { IProduct } from 'components/containers/ShopContainer/interface';
import useRequestData from 'hooks/useRequestDate';
import { request } from 'network';
import React, { useEffect, useState } from 'react';
import { IProductWithRaiting, IRaitinObj } from './interface';

export function useRaitingCount(param: object) {
  const [loading, setLoading] = useState<boolean>(false);
  const [raitingObj, setRaitingObj] = useState<Array<IRaitinObj>>([]);
  const [resultDate, setResultDate] = useState<Array<IProductWithRaiting>>([]);
  const { data: product } = useRequestData<IProduct>('/product', {});

  useEffect(() => {
    setLoading(true);
    request({ method: 'GET', url: '/reviews' })
      .then((el) => {
        const data = el.reduce((acc: Array<any>, elem: any, index: any) => {
          if (index === 0) {
            acc.push({
              product_id: elem.product_id,
              numberCount: Number(1),
              numberSum: Number(elem.raiting),
              numberCountMessange: elem.text ? 1 : 0,
            });
            return acc;
          }
          if (acc.find((elem2: any) => elem2.product_id === elem.product_id)) {
            const id = acc.findIndex((elem2: any) => elem2.product_id === elem.product_id);
            acc[id].numberCount += Number(1);
            acc[id].numberSum += Number(elem.raiting);
            acc[id].numberCountMessange += elem.text ? 1 : 0;
            return acc;
          }
          acc.push({
            product_id: elem.product_id,
            numberCount: Number(1),
            numberSum: Number(elem.raiting),
            numberCountMessange: elem.text ? 1 : 0,
          });
          return acc;
        }, []);

        setLoading(false);
        setRaitingObj(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error('Error', err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const ex = product.map((el) => {
      const findElem = raitingObj.find((elem) => elem.product_id == el.id);
      if (findElem) {
        return {
          ...el,
          raiting: findElem,
        };
      }
      return {
        ...el,
        raiting: {
          product_id: null,
          numberCount: 0,
          numberSum: 0,
          numberCountMessange: 0,
        },
      };
    });
    setLoading(false);
    setResultDate(ex);
  }, [raitingObj]);

  return {
    resultDate,
    loading,
    raitingObj,
  };
}
