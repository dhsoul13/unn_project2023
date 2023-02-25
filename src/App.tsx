import AuthLayout from 'components/component/AuthLayout';
import AboutContainer from 'components/containers/AboutContainer';
import AddProductContainer from 'components/containers/AddProductContainer';
import AuthContainer from 'components/containers/AuthContainer';
import BasketContainer from 'components/containers/BasketContainer';
import DeliveryContainer from 'components/containers/DeliveryContainer';
import ErrorContainer from 'components/containers/ErrorContainer';
import InfoContainer from 'components/containers/InfoContainer';
import LikeContainer from 'components/containers/LikeContainer';
import MainContainer from 'components/containers/MainContainer';
import OurShopContainer from 'components/containers/OurShopContainer';
import ProductContainer from 'components/containers/ProductContainer';
import QuestionContainer from 'components/containers/QuestionContainer';
import RegistrationContainer from 'components/containers/RegistrationContainer';
import ReviewsContainer from 'components/containers/ReviewsContainer';
import SearchContainer from 'components/containers/SearchContainer';
import UserConatiner from 'components/containers/UserContainer';
import { router } from 'helpers/routers';
import AuthHoc from 'hocs/AuthHoc';
import { request } from 'network';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { isAuth } from 'store/reducers/authreducer';
import MainLayout from './components/component/common/layouts/main';
import ShopContainer from './components/containers/ShopContainer';

const App: React.FC = () => {
  const dispatch = useDispatch();

  request({
    url: '/users',
    params: {
      id: 0,
    },
  }).then((el) => {
    dispatch(
      isAuth({
        isAdmin: el[0].isAdmin,
        isAuth: true,
        info: {
          username: el[0].username,
          id: el[0].id,
        },
      })
    );
  });

  return (
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
                <BasketContainer />
              </AuthHoc>
            }
          />
          <Route
            path={router.like}
            element={
              <AuthHoc>
                <LikeContainer />
              </AuthHoc>
            }
          />
          <Route
            path={router.panel}
            element={
              <AuthHoc>
                <UserConatiner />
              </AuthHoc>
            }
          />
          <Route index element={<>dsfs</>} />
          <Route path={router.info} element={<>info</>} />

          <Route path={router.addProduct} element={<AddProductContainer />} />

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
};

export default App;
