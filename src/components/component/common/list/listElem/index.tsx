/* eslint-disable import/prefer-default-export */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Feetback from '../../../../../assets/svgs/feetback';
import Like from '../../../../../assets/svgs/like';
import SpinerSvg from '../../../../../assets/svgs/spiner';
import Start from '../../../../../assets/svgs/stars';
import { getMoney } from '../../../../../utils/getMoney';
import { IProductProbs } from '../interface';
import 'react-lazy-load-image-component/src/effects/blur.css';
import apple from '../../../../../assets/imgs/apple10.png';
import SliderProduct from '../../sliders/sliderProducts';
import { lineBreakeFun } from '../../../../../utils/lineBreak';

export const ProductElemProduct: React.FC<IProductProbs> = ({ data }) => (
  <div className="item">
    <div className="item__like">
      <Like />
    </div>
    {data?.discount?.isDiscount ? (
      <div className="item__discont">{data?.discount?.count}%</div>
    ) : (
      <></>
    )}

    <div className="item__content">
      <div className="item__img">
        {true ? (
          <>
            <SliderProduct />{' '}
          </>
        ) : (
          <div className="item__img-not">Пока что нет изображения</div>
        )}
      </div>
      <div className="item__informs">
        <h2 className="item__title">
          {lineBreakeFun({
            text: `${data.title}`,
            number: 14,
          })}{' '}
          ({data.property.storage}GB)
        </h2>
        <div className="item__info">
          <div className="item__left">
            <div className="raiting">
              <div className="raiting__svg">
                <Start />
              </div>
              <div className="raiting__count">{data.raiting}</div>
            </div>
            <div className="reviews">
              <div className="reviews__svg">
                <Feetback />
              </div>
              <div className="reviews__text">{data?.reviews?.length}</div>
            </div>
          </div>
          <div className="item__info-right">
            <div className="item__price">
              <span className="item__price-1">Цена:</span>

              {data.discount.isDiscount ? (
                <div className="item__price-with-discount-c">
                  <div className="item__price-3">
                    <span className="line"></span>
                    {data.price}р
                  </div>
                  <span className="item__price-2 discount">
                    {getMoney({ number: data.price, dicsount: data?.discount?.count })}р
                  </span>
                </div>
              ) : (
                <span className="item__price-2">{data.price}р</span>
              )}
            </div>
          </div>
        </div>
        <div className="item__proporty">
          <h2 className="item__proporty-title">
            Цвет: <span>{data.property.color.title}</span>
          </h2>
        </div>
        <div className="item__color">
          <span
            style={{
              backgroundColor: `${data.property.color.codeColor}`,
            }}></span>
        </div>
      </div>
    </div>
  </div>
);
