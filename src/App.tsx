import AuthLayout from 'components/component/AuthLayout';
import AboutContainer from 'components/containers/AboutContainer';
import AuthContainer from 'components/containers/AuthContainer';
import DeliveryContainer from 'components/containers/DeliveryContainer';
import ErrorContainer from 'components/containers/ErrorContainer';
import InfoContainer from 'components/containers/InfoContainer';
import MainContainer from 'components/containers/MainContainer';
import OurShopContainer from 'components/containers/OurShopContainer';
import QuestionContainer from 'components/containers/QuestionContainer';
import RegistrationContainer from 'components/containers/RegistrationContainer';
import AuthHoc from 'hocs/AuthHoc';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/component/common/layouts/main';
import ShopContainer from './components/containers/ShopContainer';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainContainer />} />
        <Route path="shop" element={<ShopContainer />} />
        <Route
          path="basket"
          element={
            <AuthHoc>
              <>Basket</>
            </AuthHoc>
          }
        />
        <Route
          path="like"
          element={
            <AuthHoc>
              <>Like</>
            </AuthHoc>
          }
        />
        <Route
          path="/user"
          element={
            <AuthHoc>
              <>fsfsf</>
            </AuthHoc>
          }>
          <Route index element={<>dsfs</>} />
          <Route path="info" element={<>info</>} />
        </Route>
        <Route path="*" element={<ErrorContainer />} />
        <Route path="/info" element={<InfoContainer />}>
          <Route index element={<AboutContainer />} />
          <Route path="about" element={<AboutContainer />} />
          <Route path="ourshop" element={<OurShopContainer />} />
          <Route path="delivery" element={<DeliveryContainer />} />
          <Route path="question" element={<QuestionContainer />} />
        </Route>

        <Route path="/entrance" element={<AuthLayout />}>
          <Route path="auth" element={<AuthContainer />} />
          <Route path="reg" element={<RegistrationContainer />} />
        </Route>
      </Route>
    </Routes>
  </>
);

export default App;
