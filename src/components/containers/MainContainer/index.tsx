import MainPage from 'components/pages/MainPage';
import { useMapContent } from 'hooks/useMapContent';
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

  /// Для карты

  const [map] = useMapContent('http://localhost:5005/location');

  return (
    <>
      <MainPage discount={discount} changeBrend={handlerChangeBrend} data={data} map={map} />
    </>
  );
};

export default MainContainer;
