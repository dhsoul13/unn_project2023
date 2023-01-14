import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import apple from '../../../../../assets/imgs/apple10.png';

const SliderProduct = () => (
  <Swiper
    className="slider"
    spaceBetween={50}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 300,
      disableOnInteraction: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}>
    <SwiperSlide className="slider__el">
      <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" height={'350px'} />
    </SwiperSlide>
    <SwiperSlide className="slider__el">
      <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" height={'350px'} />
    </SwiperSlide>
    <SwiperSlide className="slider__el">
      <LazyLoadImage alt="IPhone 11" src={apple} effect="blur" height={'350px'} />
    </SwiperSlide>
  </Swiper>
);

export default SliderProduct;
