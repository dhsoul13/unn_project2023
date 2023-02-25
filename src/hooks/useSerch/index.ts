/* eslint-disable import/prefer-default-export */
import { request } from 'network';
import { useEffect, useState } from 'react';
import { scrollTo, scrollIntoView } from 'scroll-js';

export const useSerch = (): [any, any] => {
  const [data, setData] = useState<Array<any>>([]);
  const [searchData, setSearchData] = useState<Array<any>>([]);

  useEffect(() => {
    request({
      url: '/product',
    })
      .then((el) => {
        setData(el);
        setSearchData(el);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handlerSerchData = (str: string) => {
    setSearchData(
      data.filter((elem) => elem.title.toLowerCase().includes(str.toLocaleLowerCase()))
    );
  };

  return [handlerSerchData, searchData];
};
