/* eslint-disable no-unused-expressions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import BreadCrumbs from '../../breadCrumbs';
import { IDefaultLayout } from './Interface';

const DefaultLayout: React.FC<IDefaultLayout> = ({ title, elements }) => (
  <div className="centerLayout">
    <div className="centerLayout__container container">
      <div className="centerLayout__content">
        <div className="centerLayout__header">
          <BreadCrumbs />
          <h2 className="centerLayout__title title">{title}</h2>
        </div>
        <div className="centerLayout__body">
          <ul className="centerLayout__list">
            {elements.map((el, index) => (
              <li className="centerLayout__item" key={index}>
                <NavLink
                  to={el.src}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {el.displayName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DefaultLayout;
