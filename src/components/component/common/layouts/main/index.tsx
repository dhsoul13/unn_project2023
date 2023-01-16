import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer';
import Header from '../../header';
import { IMainLayout } from './interface';

const MainLayout: React.FC = () => (
  <div className="body">
    <Header />
    <div className="body__content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default MainLayout;
