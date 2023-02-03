import SecretSvg from 'assets/svgs/secret';
import React from 'react';
import { Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

const SliderComment: React.FC<any> = ({ data = [] }) => (
  <Swiper
    spaceBetween={30}
    slidesPerView={4}
    className={'slider-comment'}
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,
    }}>
    {data.map((el: any) => (
      <SwiperSlide className="slider-comment__elem" key={el.id}>
        <div className="slider-comment__elem-img">
          <SecretSvg />
        </div>
        <div className="slider-comment__elem-body">
          <p className="slider-comment__text">{el.body}</p>
          <h2 className="slider-comment__name">{el.name}</h2>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SliderComment;
