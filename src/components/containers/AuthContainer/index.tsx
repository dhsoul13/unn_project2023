import AuthPage from 'components/pages/AuthPage';
import { useForm } from 'hooks/useForm';
import React from 'react';
import { IAuth } from './interface';

const AuthContainer = () => {
  const [data, onSubmit] = useForm<IAuth>({
    values: { email: '', phone: '', username: '', password: '', passwordСheck: '' },
  });

  return (
    <>
      <AuthPage value={data} onSubmit={onSubmit} />
    </>
  );
};

export default AuthContainer;
