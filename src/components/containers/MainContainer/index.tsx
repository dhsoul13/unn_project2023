import { INew } from 'components/component/News/interface';
import MainPage from 'components/pages/MainPage';
import { useRaiting } from 'hooks/useRaiting';

import useRequestData from 'hooks/useRequestDate';
import React, { useState, useEffect, useCallback } from 'react';
import { IProduct } from '../ShopContainer/interface';

const MainContainer: React.FC = () => {
  /// Для скидок
  const { data, loading } = useRequestData<IProduct>('/product', {});

  const [discount, setDiscount] = useState<Array<IProduct>>([]);

  useEffect(() => {
    setDiscount(data.filter((elem) => elem?.discount?.isDiscount === true));
  }, [data]);

  /// Для рейтинговых товаров

  const [raiting, raitingLoading] = useRaiting();

  // Для бренда

  const {
    data: brend,
    loading: brendLoading,
    changeParam: brendChange,
  } = useRequestData<IProduct>('/product', {});

  const handlerChangeBrend = (el: string) => {
    brendChange({
      brand: el,
    });
  };

  /// Для новостей

  const { data: news, loading: newLoading } = useRequestData<INew>('/news', {});

  /// Для акссесуаров

  const { data: accessory, loading: accessoryLoading } = useRequestData<IProduct>('/product', {
    type: 'accessories',
  });

  return (
    <>
      <MainPage
        discount={discount}
        changeBrend={handlerChangeBrend}
        data={brend}
        reating={raiting}
        news={news}
        accessory={accessory}
        loading={loading && newLoading && accessoryLoading && brendLoading}
      />
    </>
  );
};

export default MainContainer;
