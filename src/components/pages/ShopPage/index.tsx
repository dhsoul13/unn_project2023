import React from 'react';
import { ProductElemProduct } from 'components/component/list/listElem';
import BreadCrumbs from 'components/component/common/breadCrumbs';
import Pagination from '@mui/material/Pagination';
import usePagination from 'hooks/usePagination';
import Spiner from 'components/component/common/spiner';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { IProductProbs } from './interface';
import { IProduct } from '../../containers/ShopContainer/interface';
import FilterProduct from '../../component/common/filter/filterProduct';

const ShopPage: React.FC<IProductProbs> = ({ data, loading, showReturn }) => {
  const { getDataNotRepeat, setCurrentPage, pageCountNotRepeat, getCurrentData } = usePagination(
    data,
    6
  );
  const navigate = useNavigate();

  return (
    <>
      <section className="shoppage">
        <div className="shoppage__container container">
          <div className="shoppage__content">
            <header>
              <BreadCrumbs />
              <h2 className="shoppage__title title">Магазин</h2>
            </header>
            <div className="shoppage__body">
              <aside className="shoppage__filter">
                <FilterProduct />
              </aside>
              <div className="shoppage__products">
                <div className="shoppage__sort">Сортировка</div>
                {showReturn ? (
                  <div
                    className="shoppage__sort"
                    onClick={() => {
                      navigate('/shop');
                      navigate(0);
                    }}>
                    Ввернуться
                  </div>
                ) : (
                  ''
                )}

                {loading ? (
                  <div className="shoppage__spiner">
                    <Spiner />
                  </div>
                ) : (
                  <section className="shoppage__list">
                    {getCurrentData()?.map((el, index) => (
                      <ProductElemProduct data={el} key={index} />
                    ))}
                  </section>
                )}

                <div className="shoppage__pagination">
                  {loading ? (
                    <></>
                  ) : (
                    <>
                      {data.length > 6 ? (
                        <Pagination
                          count={pageCountNotRepeat}
                          shape="rounded"
                          onChange={(_: any, count: any) => {
                            setCurrentPage(count);
                          }}
                        />
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
