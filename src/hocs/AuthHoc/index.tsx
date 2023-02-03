import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from 'store/reducers/alertreducer';
import { EAlertReducer } from 'store/reducers/alertreducer/interface';
import { IReducer } from 'store/interface';
import { IAuthHoc } from './interface';

const AuthHoc: React.FC<IAuthHoc> = ({ children }) => {
  const isAuth = false;
  const dispatch = useDispatch();

  if (!isAuth) {
    dispatch(
      showAlert({
        status: EAlertReducer.error,
        text: 'Зарегистрируйтесь!!',
      })
    );
    return <Navigate to={'/entrance/auth'} replace={true} />;
  }
  return <>{children}</>;
};

export default AuthHoc;
