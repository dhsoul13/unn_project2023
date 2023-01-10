import React, { useState } from 'react';
import Footer from './components/component/common/footer';
import Header from './components/component/common/header';
import MainLayout from './components/component/common/layouts/main';
import ShopContainer from './components/containers/ShopContainer';

const App: React.FC = () => (
  <>
    <MainLayout>
      <ShopContainer />
    </MainLayout>
  </>
);

export default App;
