import SearchInput from 'components/component/common/inputs/SearchInput';
import React from 'react';
import { IOurShopPage } from './interface';

const OurShopPage: React.FC<IOurShopPage> = ({ value, onChange, exit }) => (
  <div className="ourshop">
    <div className="ourshop__container container">
      <div className="ourshop__content">
        <div className="ourshop__header">
          <h2 className="ourshop__title">Наши магазины</h2>
        </div>
        <div className="ourshop__search-container">
          <div className="ourshop__search">
            <SearchInput value={value} onChange={onChange} exit={exit} />
          </div>
        </div>
        <div className="ourshop__body">
          <ul className="ourshop__sitebar">
            <li className="ourshop__element">Москва</li>
            <li className="ourshop__element">Москва</li>
            <li className="ourshop__element">Москва</li>
            <li className="ourshop__element">Москва</li>
            <li className="ourshop__element">Москва</li>
          </ul>
          <div className="ourshop__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4918fd3b4d76a87aa17a661a2ae02b54412b4ea8b4f0886f45e5c0e26d89e5e4&amp;source=constructor"
              width="100%"
              height="500"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurShopPage;
