import AuthLayout from 'components/component/AuthLayout';
import AboutContainer from 'components/containers/AboutContainer';
import AuthContainer from 'components/containers/AuthContainer';
import DeliveryContainer from 'components/containers/DeliveryContainer';
import ErrorContainer from 'components/containers/ErrorContainer';
import InfoContainer from 'components/containers/InfoContainer';
import MainContainer from 'components/containers/MainContainer';
import OurShopContainer from 'components/containers/OurShopContainer';
import ProductContainer from 'components/containers/ProductContainer';
import QuestionContainer from 'components/containers/QuestionContainer';
import RegistrationContainer from 'components/containers/RegistrationContainer';
import ReviewsContainer from 'components/containers/ReviewsContainer';
import SearchContainer from 'components/containers/SearchContainer';
import { router } from 'helpers/routers';
import AuthHoc from 'hocs/AuthHoc';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/component/common/layouts/main';
import ShopContainer from './components/containers/ShopContainer';

const App: React.FC = () => (
  <>
    <Routes>
      <Route path={router.main} element={<MainLayout />}>
        <Route index element={<MainContainer />} />
        <Route path={router.shop} element={<ShopContainer />} />
        <Route path={router.product} element={<ProductContainer />} />
        <Route
          path={router.basket}
          element={
            <AuthHoc>
              <>Basket</>
            </AuthHoc>
          }
        />
        <Route
          path={router.like}
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
          <Route path={router.info} element={<>info</>} />
        </Route>
        <Route path={router.error} element={<ErrorContainer />} />
        <Route path={router.info} element={<InfoContainer />}>
          <Route index element={<AboutContainer />} />
          <Route path={router.about} element={<AboutContainer />} />
          <Route path={router.ourshop} element={<OurShopContainer />} />
          <Route path={router.reviews} element={<ReviewsContainer />} />
          <Route path={router.question} element={<QuestionContainer />} />
        </Route>

        <Route path={router.entrance} element={<AuthLayout />}>
          <Route path={router.auth} element={<AuthContainer />} />
          <Route path={router.reg} element={<RegistrationContainer />} />
        </Route>

        <Route path={router.search} element={<SearchContainer />} />
      </Route>
    </Routes>
  </>
);

export default App;
