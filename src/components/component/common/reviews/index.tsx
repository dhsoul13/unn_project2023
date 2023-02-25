import React from 'react';
import Stars from '../stars';

const ReviewsContent: React.FC<{
  dataReviws: any;
  handlerShowReviews: () => void;
  handlerCloseReviews: () => void;
  globalRaiting: any;
  isMore: boolean;
}> = ({ dataReviws, handlerShowReviews, handlerCloseReviews, isMore, globalRaiting }) => (
  <section className="reviewscontent">
    <div className="reviewscontent__container container">
      <div className="reviewscontent__content">
        <header className="reviewscontent__header">
          <h2 className="reviewscontent__title title">Отзывы</h2>
          <div className="reviewscontent__inform">
            <h2>Колличество отзывов: {globalRaiting?.count}</h2>
            <div>
              <Stars value={globalRaiting?.reviewsCount} onChange={() => {}} title={'Оценка:'} />
            </div>
          </div>
        </header>
        <section className="reviewscontent__elems">
          {dataReviws?.map((el: any) => (
            <article className="reviewscontent__elem">
              <div className="reviewscontent__user">
                Покупатель: <span>{el.user_id}</span>
              </div>
              <div className="reviewscontent__text">{el.text}</div>
            </article>
          ))}
        </section>
        {isMore ? (
          <div className="reviewscontent__btn-rev">
            <button
              onClick={() => {
                handlerShowReviews();
              }}>
              Открыть еще
            </button>
          </div>
        ) : (
          <></>
        )}
        {!isMore ? (
          <div className="reviewscontent__btn-rev">
            <button
              onClick={() => {
                handlerCloseReviews();
              }}>
              Закрыть
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  </section>
);

export default ReviewsContent;
