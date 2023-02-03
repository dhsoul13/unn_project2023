import Form from 'components/component/common/form';
import { schemaAuth } from 'helpers/validate';
import React from 'react';
import { IAuthPage } from './interface';

const AuthPage: React.FC<IAuthPage> = ({ value, onSubmit }) => (
  <section className="auth">
    <div className="auth__container">
      <Form
        initialValues={{}}
        inputs={[
          {
            id: 'email',
            name: 'email',
            placeholder: 'Введите email',
            title: 'Email',
          },
          {
            id: 'phone',
            name: 'phone',
            placeholder: 'Введите введите телефон',
            title: 'Телефон',
          },
          {
            id: 'username',
            name: 'username',
            placeholder: 'Введите введите имя',
            title: 'Имя',
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
        schema={schemaAuth}
        onSubmit={onSubmit}
      />
    </div>
  </section>
);

export default AuthPage;
