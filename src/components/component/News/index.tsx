import React, { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { menuForNews } from 'helpers/menu';
import { schemaReviws } from 'helpers/validate';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAdmin } from 'store/reducers/authreducer/selection';
import Spiner from '../common/spiner';
import NotImg from '../../../assets/imgs/not_img.jpg';
import ButtonSlider from '../common/buttonSlider';
import MenuComponent from '../common/menu';
import ModalWindow from '../common/modal';
import Form from '../common/form';
import { INew, INews } from './interface';

const News: React.FC<INews> = ({ loading, data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const dispatch = useDispatch();
  const isAdmin = useSelector(getIsAdmin);

  return (
    <>
      {loading ? (
        <section>
          <div>
            <Spiner />
          </div>
        </section>
      ) : (
        <section className="news">
          <header className="news__header">
            <h2 className="news__title title">Новости:</h2>
            <div className="news__btns">
              <ButtonSlider refs={[navigationPrevRef, navigationNextRef]} />
            </div>
          </header>
          <div className="news__body">
            <Swiper
              className="news__slider"
              modules={[Navigation]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}>
              {data.length ? (
                <>
                  {data.map((el: INew, index) => (
                    <SwiperSlide className="news__slider-slide" key={index}>
                      <article className="news__slider-body">
                        <div className="news__slider-left">
                          <h2 className="news__slider-title title">{el.title}</h2>
                          <p className="news__slider-text">{el.text}</p>
                        </div>
                        <div className="news__slider-right">
                          <div className="news__img">
                            {el.img ? (
                              <>yes</>
                            ) : (
                              <>
                                <LazyLoadImage src={NotImg} />
                              </>
                            )}
                          </div>
                          <>
                            {isAdmin ? (
                              <>
                                <div className="news__slider-admin">
                                  <MenuComponent data={menuForNews} elem={el.id} />
                                </div>
                              </>
                            ) : (
                              ''
                            )}
                          </>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <article>
                  <h2>Нет данных</h2>
                </article>
              )}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default News;
