import React from 'react';
import Footer from '../../footer';
import Header from '../../header';
import { IMainLayout } from './interface';

const MainLayout: React.FC<IMainLayout> = ({ children }) => (
  <div className="body">
    <Header />
    <div className="body__content">{children}</div>
    <Footer />
  </div>
);

export default MainLayout;
