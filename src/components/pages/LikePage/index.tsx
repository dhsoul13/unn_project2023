/* eslint-disable no-shadow */
import Item from 'components/component/common/item';
import Spiner from 'components/component/common/spiner';
import usePagination from 'hooks/usePagination';
import React from 'react';
import { Pagination } from '@mui/material';
import BreadCrumbs from 'components/component/common/breadCrumbs';
import { useDispatch } from 'react-redux';
import { showAlert } from 'store/reducers/alertreducer';
import { EAlertReducer } from 'store/reducers/alertreducer/interface';

const LikePage: React.FC<{
  data: Array<any>;
  loading: boolean;
  deleteF: (el: any) => void;
}> = ({ data, loading, deleteF }) => {
  const { getDataNotRepeat, setCurrentPage, pageCountNotRepeat, getCurrentDataWithoutRepeat } =
    usePagination(data, 3);

  const dispatch = useDispatch();
  return (
    <>
      {loading ? (
        <>
          <Spiner />
        </>
      ) : (
        <section className="like">
          <div className="like__container container">
            <div className="like__component">
              <header className="like__header">
                <BreadCrumbs />
                <h2 className="like__title title">Избранные продукты</h2>
              </header>
              <div className="like__body">
                <section className="like__list">
                  {data.length ? (
                    <>
                      {getCurrentDataWithoutRepeat().map((el, index) => (
                        <Item
                          el={el}
                          key={index}
                          functionals={{
                            type: 'delete',
                            function: (el: any) => {
                              dispatch(
                                showAlert({
                                  status: EAlertReducer.success,
                                  text: 'Успешно удалено из избранных',
                                })
                              );
                              deleteF(el);
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
                </section>
                <div className="like__pagination">
                  {getDataNotRepeat().length > 3 ? (
                    <>
                      <Pagination
                        count={pageCountNotRepeat}
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LikePage;
