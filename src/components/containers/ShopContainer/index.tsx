import React, { useEffect } from 'react';
import useRequestData from '../../../hooks/useRequestDate';
import ShopPage from '../../pages/ShopPage';
import { IProduct } from './interface';

const ShopContainer: React.FC = () => {
  const { data, loading } = useRequestData<IProduct>('http://localhost:5005/product');

  return (
    <>
      <ShopPage data={data} loading={loading} />
    </>
  );
};

export default ShopContainer;
