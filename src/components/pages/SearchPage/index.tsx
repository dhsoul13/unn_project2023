import BreadCrumbs from 'components/component/common/breadCrumbs';
import Form from 'components/component/common/form';
import React from 'react';

const SearchPage = () => (
  <section className="search">
    <div className="search__container container">
      <header className="search__header">
        <BreadCrumbs />
        <h2 className="search__title title">Поиск</h2>
      </header>
      <div className="search__content">
        <aside className="search__left">
          <Form
            onSubmit={() => {
              alert(1);
            }}
            schema={{}}
            initialValues={{}}
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
            <article className="search__item">
              <div className="search__item-header">Название</div>
              <div className="search__item-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis similique eaque
                nesciunt! Exercitationem, mollitia quia excepturi enim illum omnis quibusdam autem,
                quod quos labore voluptatibus aliquam quas, reprehenderit quae!
              </div>
            </article>
            <article className="search__item">
              <div className="search__item-header">Название</div>
              <div className="search__item-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis similique eaque
                nesciunt! Exercitationem, mollitia quia excepturi enim illum omnis quibusdam autem,
                quod quos labore voluptatibus aliquam quas, reprehenderit quae!
              </div>
            </article>
            <article className="search__item">
              <div className="search__item-header">Название</div>
              <div className="search__item-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis similique eaque
                nesciunt! Exercitationem, mollitia quia excepturi enim illum omnis quibusdam autem,
                quod quos labore voluptatibus aliquam quas, reprehenderit quae!
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default SearchPage;
