import Form from 'components/component/common/form';
import { schemaRegistration } from 'helpers/validate';
import React from 'react';
import { IRegPage } from './interface';

const RegistrationPage: React.FC<IRegPage> = ({ value, onSumbit }) => (
  <section className="auth">
    <div className="auth__container">
      <Form
        initialValues={value}
        inputs={[
          {
            id: 'email',
            name: 'email',
            placeholder: 'Введите email',
            title: 'Email',
          },
          {
            id: 'password',
            name: 'password',
            placeholder: 'Введите пароль',
            title: 'Пароль',
            type: 'password',
          },
          {
            id: 'passwordСheck',
            name: 'passwordСheck',
            placeholder: 'Проверить пароль',
            title: 'Проверка пароля',
            type: 'password',
          },
        ]}
        schema={schemaRegistration}
        onSubmit={onSumbit}
      />
    </div>
  </section>
);

export default RegistrationPage;
