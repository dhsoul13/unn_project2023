import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { IAuthHoc } from './interface';

const AuthHoc: React.FC<IAuthHoc> = ({ children }) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={'/entrance/auth'} replace={true} />;
  }
  return <>{children}</>;
};

export default AuthHoc;
