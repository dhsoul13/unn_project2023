import SearchInput from 'components/component/common/inputs/SearchInput';
import MapContent from 'components/component/common/map';
import React from 'react';
import { IOurShopPage } from './interface';

const OurShopPage: React.FC<IOurShopPage> = ({ value, onChange, exit }) => (
  <section className="ourshop">
    <div className="ourshop__container container">
      <div className="ourshop__content">
        <MapContent title="Наши магазины" />
      </div>
    </div>
  </section>
);

export default OurShopPage;
