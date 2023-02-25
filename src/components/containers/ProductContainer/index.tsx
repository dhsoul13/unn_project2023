import ProductPage from 'components/pages/ProductPage';
import useRequestData from 'hooks/useRequestDate';
import { useReviewsData } from 'hooks/useReviewsData';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductContainer = () => {
  const { id } = useParams();

  const { data, loading } = useRequestData(`/product/${id}`, {});

  const [content, loadingRew, handlerShowReviews, handlerCloseReviews, isMore, globalRaiting] =
    useReviewsData(id);

  return (
    <>
      <ProductPage
        loading={loading}
        data={data}
        dataReviws={content}
        loadingReviews={loadingRew}
        handlerShowReviews={handlerShowReviews}
        handlerCloseReviews={handlerCloseReviews}
        isMore={isMore}
        globalRaiting={globalRaiting}
      />
    </>
  );
};

export default ProductContainer;
