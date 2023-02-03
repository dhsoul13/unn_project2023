import React from 'react';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Button from '../../button';
import { EButton } from '../../button/interface';
import { ESliderButton, ISliderButton } from './interface';

const SliderButtons: React.FC<ISliderButton> = ({ delay, type = ESliderButton.li, data }) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={4}
    loop={true}
    className={'slider-buttons'}
    modules={[Autoplay]}
    autoplay={{
      delay,
    }}>
    <>
      {type === 'li' ? (
        <>
          {data.map((el, index) => (
            <SwiperSlide className={'slider-buttons__slide'} key={el.id}>
              <h3>Адрес:</h3>
              <p className={'slider-buttons__text'}>{el.address_title}</p>
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          {data.map((el, index) => (
            <SwiperSlide
              className={`slider-buttons__slide ${type === 'button' ? 'button' : ''}`}
              key={el.id}>
              <Button text={el.address_title} type={EButton.button} />
            </SwiperSlide>
          ))}
        </>
      )}
    </>
  </Swiper>
);

export default SliderButtons;
