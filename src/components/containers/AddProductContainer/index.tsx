import AddProductPage from 'components/pages/AddProductPage';
import { useTag } from 'hooks/useTag';
import React from 'react';

const AddProductContainer = () => {
  const { dataTegs, loading } = useTag();

  return (
    <>
      <AddProductPage dataTegs={dataTegs} loading={loading} />
    </>
  );
};

export default AddProductContainer;
