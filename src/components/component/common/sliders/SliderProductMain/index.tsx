import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getMoney } from 'utils/getMoney';
import apple from '../../../../../assets/imgs/apple10.png';

const SliderProductMain: React.FC<any> = ({
  data,
  count = 2,
  buttons = [],
  type,
  delay = 3000,
}) => (
  <Swiper
    className="slider-main"
    spaceBetween={10}
    slidesPerView={count}
    modules={[Navigation, Autoplay]}
    loop={true}
    navigation={{
      prevEl: buttons.length ? buttons[0].current : null,
      nextEl: buttons.length ? buttons[1].current : null,
    }}
    autoplay={{
      delay,
    }}>
    {data.length ? (
      data.map((el: any, index: number) => (
        <SwiperSlide className="slider-main__slide" key={index}>
          <div className="slider-main__img">
            <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" />
          </div>
          <div className="slider-main__slide-content">
            <h2 className="slider-main__title">{el.title}</h2>
            <p className={`slider-main__text ${el.discount.isDiscount ? 'discount' : ''}`}>
              {el.discount.isDiscount
                ? getMoney({
                    number: el.price,
                    dicsount: el.discount.count,
                  })
                : el.price}
              р
            </p>

            {el.discount.isDiscount ? (
              <div className="slider-main__sale">
                <h2>{el.discount.count}%</h2>
              </div>
            ) : (
              ''
            )}
          </div>
        </SwiperSlide>
      ))
    ) : (
      <div className="slider-main__not-sale">
        <h2 className="slider-main__not-sale-title">Нет товаров</h2>
      </div>
    )}
  </Swiper>
);

export default SliderProductMain;
