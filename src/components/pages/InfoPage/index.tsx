import DefaultLayout from 'components/component/common/layouts/DefaultLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const InfoPage = () => (
  <section className="infopage">
    <nav className="infopage__header">
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
            src: 'reviews',
            displayName: 'Отзывы',
          },
          {
            src: 'question',
            displayName: 'Задать нам вопрос',
          },
        ]}
      />
    </nav>
    <section className="infopage__body">
      <Outlet />
    </section>
  </section>
);

export default InfoPage;
