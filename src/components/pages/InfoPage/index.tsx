import DefaultLayout from 'components/component/common/layouts/DefaultLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const InfoPage = () => (
  <div className="infopage">
    <div className="infopage__header">
      <DefaultLayout
        title={'Информация'}
        elements={[
          {
            src: 'about',
            displayName: 'О нас',
          },
          {
            src: 'ourshop',
            displayName: 'Наши магазины',
          },
          {
            src: 'delivery',
            displayName: 'Доставка',
          },
          {
            src: 'question',
            displayName: 'Задать нам вопрос',
          },
        ]}
      />
    </div>
    <div className="infopage__body">
      <Outlet />
    </div>
  </div>
);

export default InfoPage;
