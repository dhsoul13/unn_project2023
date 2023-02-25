import React, { useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Img from 'assets/imgs/title.png';
import { getMoney } from 'utils/getMoney';
import { useNavigate } from 'react-router-dom';

const Item: React.FC<any> = ({ el, functionals }) => {
  const navigate = useNavigate();
  const handlerClickForNavigate = useCallback((id: string) => {
    navigate(`/shop/${id}`);
  }, []);

  return (
    <>
      <article
        className={`item-2 ${!el.count ? 'not-product' : ''}`}
        onClick={() => {
          handlerClickForNavigate(el.id);
        }}>
        <header className="item-2__item-header">
          {functionals?.type === 'delete' ? (
            <div
              className="item-2__delete"
              onClick={(e) => {
                e.stopPropagation();
                functionals.function(el);
              }}>
              <h2>x</h2>
            </div>
          ) : (
            <></>
          )}
          <div className="item-2__elem-color">
            <div
              className="item-2__circle"
              style={{
                backgroundColor: el.color.codeColor,
              }}></div>
          </div>
          <LazyLoadImage alt="IPhone 11" src={Img} effect="blur" />
        </header>
        <div className="item-2__item-body">
          <h2 className="item-2__item-title title">{el.title}</h2>
          <div className="item-2__item-info">
            <h3 className="item-2__color">Цвет: {el.color.title}</h3>
            <h3 className={`item-2__item-price title ${el.discount.isDiscount ? 'discount' : ''}`}>
              {el.count ? (
                <>
                  {el.discount.isDiscount
                    ? getMoney({
                        number: el.price,
                        dicsount: el.discount.count,
                      })
                    : el.price}
                  р
                </>
              ) : (
                <>Нет в наличии</>
              )}
            </h3>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
