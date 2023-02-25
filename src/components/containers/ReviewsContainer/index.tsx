import ReviewsPage from 'components/pages/ReviewsPage';
import useRequestData from 'hooks/useRequestDate';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from 'store/reducers/alertreducer';
import { EAlertReducer } from 'store/reducers/alertreducer/interface';
import { showModal } from 'store/reducers/modalreducer';
import { ETypeModal } from 'store/reducers/modalreducer/interface';

const isAuth = true;
const ReviewsContainer = () => {
  const { data, loading } = useRequestData('https://jsonplaceholder.typicode.com/comments', {});

  const dispatch = useDispatch();

  const handlerClickShowModal = () => {
    if (isAuth) {
      dispatch(
        showModal({
          type: ETypeModal.rewiews,
          content: '',
        })
      );
    } else {
      dispatch(
        showAlert({
          status: EAlertReducer.error,
          text: 'Зарегистрируйтесь!!',
        })
      );
    }
  };

  return (
    <>
      <ReviewsPage data={data} loading={loading} showModal={handlerClickShowModal} />
    </>
  );
};

export default ReviewsContainer;
