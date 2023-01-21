import RegistrationPage from 'components/pages/RegistrationPage';
import { useForm } from 'hooks/useForm';
import React from 'react';
import { IReg } from './interface';

const RegistrationContainer = () => {
  const [data, onSubmit] = useForm<IReg>({
    values: { email: '', password: '', passwordСheck: '' },
  });

  return <RegistrationPage value={data} onSumbit={onSubmit} />;
};

export default RegistrationContainer;
