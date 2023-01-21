import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../common/breadCrumbs';

const AuthLayout = () => (
  <div className="authlayout">
    <div className="authlayout__container container">
      <div className="authlayout__content">
        <div className="authlayout__header">
          <div className="authlayout__breadCrumbs">
            <BreadCrumbs />
          </div>
          <div className="authlayout__title">Вход в систему</div>
          <ul className="authlayout__list">
            <li className="authlayout__elem">
              <NavLink to={'/entrance/auth'}>Авторизация</NavLink>
            </li>
            <li className="authlayout__elem">
              <NavLink to={'/entrance/reg'}>Регистрация</NavLink>
            </li>
          </ul>
        </div>
        <div className="authlayout__body">
          <div className="authlayout__forms">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
