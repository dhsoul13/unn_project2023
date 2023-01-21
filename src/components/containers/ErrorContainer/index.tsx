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
    const time = timer({
      callback: handlerClick,
      time: 30000,
    });

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <ErrorPage onClick={handlerClick} />
    </>
  );
};

export default ErrorContainer;
