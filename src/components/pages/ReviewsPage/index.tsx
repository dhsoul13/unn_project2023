import Button from 'components/component/common/button';
import { EButton } from 'components/component/common/button/interface';
import SliderComment from 'components/component/common/sliders/SliderComment';
import Spiner from 'components/component/common/spiner';
import React from 'react';
import { IReviews } from './interface';

const ReviewsPage: React.FC<IReviews> = ({ data, loading, showModal }) => (
  <section className="reviews">
    <div className="reviews__container container">
      <div className="reviews__content">
        <h2 className="reviews__title title">Наши отзывы</h2>
        <div className="reviews__body">
          <section className="reviews__slider">
            {!loading ? <SliderComment data={data} /> : <Spiner />}
          </section>
          <div className="reviews__buttons">
            <div
              className="reviews__button"
              onClick={() => {
                showModal();
              }}>
              Добавить отзыв
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsPage;
