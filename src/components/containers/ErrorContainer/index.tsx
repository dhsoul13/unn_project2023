import ErrorPage from 'components/pages/ErrorPage';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { timer } from 'utils/timer';

const ErrorContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate('/', { replace: true });
  };
  useEffect(() => {
    timer({
      callback: handlerClick,
      time: 30000,
    });
  }, []);

  return (
    <>
      <ErrorPage onClick={handlerClick} />
    </>
  );
};

export default ErrorContainer;
