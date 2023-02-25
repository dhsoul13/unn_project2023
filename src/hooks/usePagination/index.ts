import { useState } from 'react';

const usePagination = (data: Array<any>, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemCount = data.length;
  const itemCountNotRepeat = data.reduce((acc, elem, index) => {
    if (index === 0) {
      acc.push(elem);
      return acc;
    }

    if (acc.find((el: any) => el.id === elem.id)) {
      return acc;
    }
    acc.push(elem);
    return acc;
  }, []).length;

  const getCurrentData = (): Array<any> => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const getCurrentDataWithoutRepeat = (): Array<any> => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data
      .reduce((acc, elem, index) => {
        if (index === 0) {
          acc.push(elem);
          return acc;
        }

        if (acc.find((el: any) => el.id === elem.id)) {
          return acc;
        }
        acc.push(elem);
        return acc;
      }, [])
      .slice(start, end);
  };

  const getDataNotRepeat = (): Array<any> =>
    data.reduce((acc, elem, index) => {
      if (index === 0) {
        acc.push(elem);
        return acc;
      }

      if (acc.find((el: any) => el.id === elem.id)) {
        return acc;
      }
      acc.push(elem);
      return acc;
    }, []);

  const pageCount = Math.ceil(itemCount / itemsPerPage);

  const pageCountNotRepeat = Math.ceil(itemCountNotRepeat / itemsPerPage);

  return {
    currentPage,
    getCurrentData,
    setCurrentPage,
    pageCount,
    getCurrentDataWithoutRepeat,
    getDataNotRepeat,
    pageCountNotRepeat,
  };
};

export default usePagination;
