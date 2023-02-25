/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { request } from 'network';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function useRequestData<T>(url: string, params: any) {
  const [data, setData] = React.useState<T[]>([]);
  const [serchParam, setSearchParam] = useState<object>({});

  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    request({
      method: 'GET',
      url,
      params,
    })
      .then((el) => {
        setLoading(false);
        setData(el);
      })
      .catch((err) => {
        console.error('Error', err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(serchParam).length) {
      setLoading(true);
      request({
        method: 'GET',
        url,
        params: serchParam,
      })
        .then((el) => {
          setLoading(false);
          setData(el);
        })
        .catch((err) => {
          setLoading(false);
          console.error('Error', err);
        });
    }
  }, [serchParam]);

  const changeParam = useCallback((param: object) => {
    setSearchParam(param);
  }, []);

  return { data, loading, changeParam };
}
