/* eslint-disable camelcase */
import { Switch } from '@mui/material';
import Like from 'assets/svgs/like';
import BreadCrumbs from 'components/component/common/breadCrumbs';
import Button from 'components/component/common/button';
import { EButton } from 'components/component/common/button/interface';
import ReviewsContent from 'components/component/common/reviews';
import Specifications from 'components/component/common/Specifications';
import Spiner from 'components/component/common/spiner';
import PhoneMainInfo from 'components/component/PhoneMainInfo';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthId } from 'store/reducers/authreducer/selection';
import { getMoney } from 'utils/getMoney';
import { getBasketProduct, getLikeProduct } from 'helpers/networkfunction';
import { showAlert } from 'store/reducers/alertreducer';
import { IProduct } from './interface';

const ProductPage: React.FC<IProduct> = ({
  loading,
  data,
  loadingReviews,
  dataReviws,
  handlerShowReviews,
  handlerCloseReviews,
  globalRaiting,
  isMore,
}) => {
  const [sale, setSale] = useState<boolean>(true);

  const handlerClick = useCallback(() => {
    setSale((prev) => !prev);
  }, []);

  const dispatch = useDispatch();

  const user_id = useSelector(getAuthId);

  return (
    <section className="product">
      <div className="product__container container">
        {!loading ? (
          <div className="product__content">
            <header className="product__header">
              <BreadCrumbs />
            </header>
            <div className="product__body">
              <section className="product__main-info">
                <div className="product__slider">
                  {data?.discount?.isDiscount ? (
                    <div className="product__block-sale">{data?.discount?.count}%</div>
                  ) : (
                    ''
                  )}
                  slider
                </div>
                <div className="product__info">
                  <div
                    className="product__like"
                    onClick={() => {
                      getLikeProduct({
                        user_id,
                        product_id: data.id,
                        alertFunct: (str, status) => {
                          dispatch(
                            showAlert({
                              text: str,
                              status,
                            })
                          );
                        },
                      });
                    }}>
                    <Like />
                  </div>
                  <h3 className="product__info-text">Основная информация</h3>
                  <h2 className="product__info-title title">{data?.title}</h2>

                  <div className="product__info-container">
                    {data?.count ? (
                      <>
                        {data?.discount?.isDiscount ? (
                          <>
                            <h3 className={`product__info-price ${sale ? 'sale' : ''}`}>
                              {sale ? (
                                <>
                                  {getMoney({
                                    number: data?.price,
                                    dicsount: data?.discount?.count,
                                  })}
                                </>
                              ) : (
                                <>{data.price}</>
                              )}
                              руб
                            </h3>
                            <div className="product__price-info">
                              <h3>Цена со скидкой.</h3>
                              <Switch
                                value={sale}
                                onChange={() => {
                                  handlerClick();
                                }}
                              />
                            </div>
                          </>
                        ) : (
                          <h3 className="product__info-price">{data.price}</h3>
                        )}
                      </>
                    ) : (
                      <h3 className="product__price">Нет в наличии</h3>
                    )}
                  </div>

                  <div className="product__info-spechial">
                    <PhoneMainInfo data={data} className={'product'} />
                  </div>
                  <div className="product__buttons">
                    <Button
                      text="Положить в корзину"
                      type={EButton.button}
                      disabled={!data.count}
                      onClick={() => {
                        getBasketProduct({
                          user_id,
                          product_id: data.id,
                          alertFunct: (str, status) => {
                            dispatch(
                              showAlert({
                                text: str,
                                status,
                              })
                            );
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="product__specifications">
                <Specifications property={data.property} />
              </section>
              <section className="product__discription">
                <h2 className="product__title title">Описание товара:</h2>
                <p>{data.discription}</p>
              </section>
              <section className="producr__reviews">
                {!loadingReviews ? (
                  <ReviewsContent
                    dataReviws={dataReviws}
                    handlerShowReviews={handlerShowReviews}
                    handlerCloseReviews={handlerCloseReviews}
                    isMore={isMore}
                    globalRaiting={globalRaiting}
                  />
                ) : (
                  <div className="product__content">
                    <Spiner />
                  </div>
                )}
              </section>
            </div>
          </div>
        ) : (
          <div className="product__content">
            <Spiner />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
