import MainPage from 'components/pages/MainPage';
import useRequestData from 'hooks/useRequestDate';
import React, { useState, useEffect, useCallback } from 'react';

const MainContainer: React.FC = () => {
  const { data, loading, allData, changeHandlerUrl } = useRequestData(
    'http://localhost:5005/product'
  );
  const [discount, setDiscount] = useState<any>([]);

  useEffect(() => {
    setDiscount(allData.filter((el: any) => el?.discount?.isDiscount));
  }, [allData]);

  const handlerChangeBrend = useCallback((param: string) => {
    changeHandlerUrl('brand', param);

    console.log(data);
  }, []);

  return (
    <>
      <MainPage discount={discount} changeBrend={handlerChangeBrend} data={data} />
    </>
  );
};

export default MainContainer;
