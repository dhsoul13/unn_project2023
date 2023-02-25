/* eslint-disable no-shadow */
import { Pagination } from '@mui/material';
import BreadCrumbs from 'components/component/common/breadCrumbs';
import Button from 'components/component/common/button';
import { EButton } from 'components/component/common/button/interface';
import Form from 'components/component/common/form';
import Item from 'components/component/common/item';
import Spiner from 'components/component/common/spiner';
import usePagination from 'hooks/usePagination';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showAlert } from 'store/reducers/alertreducer';
import { EAlertReducer } from 'store/reducers/alertreducer/interface';
import { IBasketPage } from './interface';

const BasketPage: React.FC<IBasketPage> = ({
  data,
  price,
  loading,
  deleteFun,
  priceWithoutSale,
}) => {
  const { currentPage, getCurrentData, setCurrentPage, pageCount } = usePagination(data, 6);

  const dispatch = useDispatch();

  return (
    <section className="basket">
      <div className="basket__container container">
        <header className="basket__header">
          <BreadCrumbs />
          <h2 className="basket__title title">Корзина</h2>
        </header>
        {loading ? (
          <Spiner />
        ) : (
          <div className="basket__body">
            <section className="basket__order">
              <div className="basket__form">
                <Form
                  initialValues={{}}
                  inputs={[]}
                  schema={{}}
                  onSubmit={() => {
                    alert(1);
                  }}>
                  <div className="basket__information">
                    <div className="basket__info-price">
                      <h2>Итоговая сумма:</h2>
                      <div className="basket__price">
                        <span>Цена без скидки: </span>
                        <>{priceWithoutSale}р</>
                      </div>
                      <div className="basket__price">
                        <span>Цена со скидкой: </span>
                        <span>{price}р</span>
                      </div>
                      <div className="basket__price">
                        <span>Процент скидки:</span>
                        <span>{100 - (price * 100) / priceWithoutSale}%</span>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </section>
            <div className="basket__list">
              {data.length ? (
                <>
                  {' '}
                  {getCurrentData().map((el, index) => (
                    <Item
                      key={index}
                      el={el}
                      functionals={{
                        type: 'delete',
                        function: (el: any) => {
                          dispatch(
                            showAlert({
                              text: 'Товар успешно удален из корзины',
                              status: EAlertReducer.success,
                            })
                          );
                          setCurrentPage(1);
                          deleteFun(el);
                        },
                      }}
                    />
                  ))}
                </>
              ) : (
                <div>
                  <h2>Нет данных</h2>
                </div>
              )}
            </div>
            <div className="basket__pagination">
              {data.length ? (
                <>
                  <Pagination
                    count={pageCount}
                    shape="rounded"
                    onChange={(_: any, count: any) => {
                      setCurrentPage(count);
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BasketPage;
