import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMoney } from 'utils/getMoney';
import { useNavigate } from 'react-router-dom';
import { getRaitingNumber } from 'utils/getRaitingNumber';
import Start from 'assets/svgs/stars';
import apple from '../../../../../assets/imgs/apple10.png';
import Spiner from '../../spiner';

const SliderProductMain: React.FC<any> = ({
  data,
  count = 2,
  buttons = [],
  type,
  delay = 3000,
  loading,
}) => {
  const navigate = useNavigate();
  const handlerClickForNavigate = useCallback((id: string) => {
    navigate(`/shop/${id}`);
  }, []);

  return (
    <>
      {loading ? (
        <div className="slider-main-not">
          <div className="slider-main-not__content">
            <Spiner />
          </div>
        </div>
      ) : (
        <>
          {data.length ? (
            <Swiper
              className="slider-main"
              spaceBetween={10}
              slidesPerView={count}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: buttons.length ? buttons[0].current : null,
                nextEl: buttons.length ? buttons[1].current : null,
              }}
              autoplay={{
                delay,
              }}>
              {data.map((el: any, index: number) => (
                <SwiperSlide
                  className="slider-main__slide"
                  key={index}
                  onClick={() => {
                    handlerClickForNavigate(el.id);
                  }}>
                  <div className="slider-main__img">
                    <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" />
                  </div>
                  <div className="slider-main__slide-content">
                    <h2 className="slider-main__title title">{el.title}</h2>
                    <p className={`slider-main__text ${el.discount.isDiscount ? 'discount' : ''}`}>
                      {el.discount.isDiscount
                        ? getMoney({
                            number: el.price,
                            dicsount: el.discount.count,
                          })
                        : el.price}
                      р
                    </p>

                    {el.discount.isDiscount && !el?.raiting?.length ? (
                      <div className="slider-main__sale">
                        <h2 className="title">{el.discount.count}%</h2>
                      </div>
                    ) : (
                      ''
                    )}

                    {el?.raiting?.length ? (
                      <div className="slider-main__raiting">
                        <div>
                          {getRaitingNumber({
                            data: el?.raiting,
                            length: el?.raiting?.length,
                          })}
                          <Start />
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <>
              <div className="slider-main-not">
                <div className="slider-main-not__content">
                  <h2 className="slider-main-not__title title">Нет товаров</h2>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SliderProductMain;

// {/* <Swiper
//       className="slider-main"
//       spaceBetween={10}
//       slidesPerView={count}
//       modules={[Navigation, Autoplay]}
//       navigation={{
//         prevEl: buttons.length ? buttons[0].current : null,
//         nextEl: buttons.length ? buttons[1].current : null,
//       }}
//       autoplay={{
//         delay,
//       }}>
//       {data.length ? (
//         data.map((el: any, index: number) => (
//           <SwiperSlide className="slider-main__slide" key={index}>
//             <div className="slider-main__img">
//               <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" />
//               <button
//                 className="slider-main__button"
//                 onClick={() => {
//                   handlerClickForNavigate(el.id);
//                 }}>
//                 Купить
//               </button>
//             </div>
//             <div className="slider-main__slide-content">
//               <h2 className="slider-main__title">{el.title}</h2>
//               <p className={`slider-main__text ${el.discount.isDiscount ? 'discount' : ''}`}>
//                 {el.discount.isDiscount
//                   ? getMoney({
//                       number: el.price,
//                       dicsount: el.discount.count,
//                     })
//                   : el.price}
//                 р
//               </p>
//               {el.discount.isDiscount ? (
//                 <div className="slider-main__sale">
//                   <h2>{el.discount.count}%</h2>
//                 </div>
//               ) : (
//                 ''
//               )}
//             </div>
//           </SwiperSlide>
//         ))
//       ) : (
//         <div className="slider-main__not">
//           <h2 className="slider-main__not-title title">Нет товаров</h2>
//         </div>
//       )}
//     </Swiper> */}
