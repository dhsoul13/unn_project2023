import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../button';
import { EButton } from '../button/interface';
import { IButtonsList, TDataButtonList } from './interface';

const ButtonsList: React.FC<IButtonsList> = ({ data, onClick = () => {} }) => (
  <Swiper spaceBetween={10} slidesPerView={5} className={'button-elem'}>
    {data.map((el: any, index) => (
      <SwiperSlide className="button-elem__elem" key={index}>
        <button
          className="button-elem__content"
          onClick={() => {
            onClick(el.param);
          }}
          type={'button'}>
          {el.title}
        </button>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ButtonsList;
