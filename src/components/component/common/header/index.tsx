import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clickOnLinks } from 'utils/clickOnLinksClick';
import Search from '../../../../assets/svgs/search';
import User from '../../../../assets/svgs/user';
import logo from '../../../../assets/imgs/logo.png';
import Logo from '../../../../assets/svgs/logo';
import Like from '../../../../assets/svgs/like';
import BasketSvg from '../../../../assets/svgs/basket';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__content">
          <div
            className="header__logo effects"
            onClick={() => {
              clickOnLinks({ path: '/', callback: navigate });
            }}>
            <Logo />
          </div>
          <div className="header__info">
            <ul className="header__links">
              <li
                className="header__link link"
                onClick={() => {
                  clickOnLinks({
                    path: '/shop',
                    callback: navigate,
                  });
                }}>
                Магазин
              </li>
              <li
                className="header__link link"
                onClick={() => {
                  clickOnLinks({ path: 'info', callback: navigate });
                }}>
                Информация
              </li>
            </ul>
            <ul className="header__svgs">
              <li
                className="header__svg effects-svg"
                onClick={() => {
                  clickOnLinks({ path: '/search', callback: navigate });
                }}>
                <Search />
              </li>
              <li
                className="header__svg effects-svg"
                onClick={() => {
                  clickOnLinks({ path: '/like', callback: navigate });
                }}>
                <Like />
              </li>
              <li
                className="header__svg effects-svg"
                onClick={() => {
                  clickOnLinks({ path: '/basket', callback: navigate });
                }}>
                <BasketSvg />
              </li>
              <li
                className="header__svg effects-svg"
                onClick={() => {
                  clickOnLinks({ path: '/user', callback: navigate });
                }}>
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
