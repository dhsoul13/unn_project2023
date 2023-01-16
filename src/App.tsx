import ErrorContainer from 'components/containers/ErrorContainer';
import InfoContainer from 'components/containers/InfoContainer';
import MainContainer from 'components/containers/MainContainer';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/component/common/layouts/main';
import ShopContainer from './components/containers/ShopContainer';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainContainer />} />
        <Route path="/shop" element={<ShopContainer />} />
        <Route path="/basket" element={<>Basket</>} />
        <Route path="/like" element={<>Like</>} />
        <Route path="*" element={<ErrorContainer />} />
        <Route path="/info" element={<InfoContainer />} />
      </Route>
    </Routes>
  </>
);

export default App;
