import Button from 'components/component/common/button';
import { EButton } from 'components/component/common/button/interface';
import React from 'react';
import { IErrorPage } from './interface';

const ErrorPage: React.FC<IErrorPage> = ({ onClick }) => (
  <div className="error">
    <div className="error__container container">
      <div className="error__content">
        <h2 className="error__title">Ошибка: 404</h2>
        <p className="error__text">Похоже что вы исчите на нашем сайте - нет(</p>
        <div className="error__button">
          <Button
            text={'Ввернуться назад'}
            type={EButton.button}
            onClick={() => {
              onClick();
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ErrorPage;
