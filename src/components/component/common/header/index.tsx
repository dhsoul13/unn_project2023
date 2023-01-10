import React from 'react';
import Search from '../../../../assets/svgs/search';
import User from '../../../../assets/svgs/user';
import logo from '../../../../assets/imgs/logo.png';
import Logo from '../../../../assets/svgs/logo';

const Header = () => (
  <div className="header">
    <div className="header__container container">
      <div className="header__content">
        <div className="header__logo effects">
          <Logo />
        </div>
        <div className="header__info">
          <ul className="header__links">
            <li className="header__link link">Магазин</li>
            <li className="header__link link">Информация</li>
          </ul>
          <ul className="header__svgs">
            <li className="header__svg effects-svg">
              <Search />
            </li>
            <li className="header__svg effects-svg">
              <User />
            </li>
            <li className="header__svg effects-svg">
              <Search />
            </li>
            <li className="header__svg effects-svg">
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
