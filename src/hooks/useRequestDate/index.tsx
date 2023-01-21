/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function useRequestData<T>(url: string) {
  const [data, setData] = React.useState<T[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [allData, setAllData] = React.useState<T[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((el) => el.json())
      .then((el: T[]) => {
        setData(el);
        setAllData(el);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}?${searchParams.toString()}`)
      .then((el) => el.json())
      .then((el: T[]) => {
        setData(el);
        setLoading(false);
      });
  }, [searchParams]);
  const changeHandlerUrl = (key: string, param: string) => {
    setSearchParams({ [key]: param.toLocaleLowerCase() });
  };

  return { data, loading, allData, changeHandlerUrl };
}
