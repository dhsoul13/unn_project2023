import { Pagination } from '@mui/material';
import BreadCrumbs from 'components/component/common/breadCrumbs';
import Form from 'components/component/common/form';
import { schemaSerch } from 'helpers/validate';
import usePagination from 'hooks/usePagination';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Img from 'assets/imgs/title.png';
import { getMoney } from 'utils/getMoney';
import Item from 'components/component/common/item';

const ITEMS_PER_PAGE = 3;

const SearchPage: React.FC<any> = ({ data, handlerSerchData }) => {
  const { currentPage, getCurrentData, setCurrentPage, pageCount } = usePagination(data, 6);

  return (
    <section className="search">
      <div className="search__container container">
        <header className="search__header">
          <BreadCrumbs />
          <h2 className="search__title title">Поиск</h2>
        </header>
        <div className="search__content">
          <aside className="search__left">
            <Form
              onSubmit={(el) => {
                handlerSerchData(el.search);
              }}
              schema={schemaSerch}
              initialValues={{
                search: '',
              }}
              inputs={[
                {
                  id: 'search',
                  name: 'search',
                  placeholder: 'Введенные значения',
                  title: 'Название товара',
                },
              ]}
            />
          </aside>
          <section className="search__rignt">
            <div className="search__list">
              {getCurrentData().map((el: any) => (
                <>
                  <Item el={el} />
                </>
              ))}
            </div>
            <div className="search__pagination">
              <Pagination
                count={pageCount}
                shape="rounded"
                onChange={(_: any, count: any) => {
                  setCurrentPage(count);
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
