import BasketPage from 'components/pages/BasketPage';
import { useElemForList } from 'hooks/useElemForList';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthInfo } from 'store/reducers/authreducer/selection';

const BasketContainer = () => {
  const info = useSelector(getAuthInfo);
  const { data, loading, deleteElem, getPrice, getPriceWithoutSale } = useElemForList(
    'basket',
    info.id
  );

  return (
    <>
      <BasketPage
        data={data}
        price={getPrice}
        loading={loading}
        deleteFun={deleteElem}
        priceWithoutSale={getPriceWithoutSale}
      />
    </>
  );
};

export default BasketContainer;
