import Arrows from 'assets/svgs/arrows';
import SpinerSvg from 'assets/svgs/spiner';
import Button from 'components/component/common/button';
import { EButton } from 'components/component/common/button/interface';
import ButtonsList from 'components/component/common/buttonsList';
import SliderProductMain from 'components/component/common/sliders/SliderProductMain';
import React, { useRef } from 'react';
import Img from 'assets/imgs/title.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import MapContent from 'components/component/common/map';
import ButtonSlider from 'components/component/common/buttonSlider';
import { brands } from 'helpers/brands';
import News from 'components/component/News';
import { IMainProduct } from './interface';

const MainPage: React.FC<IMainProduct> = ({
  discount,
  changeBrend,
  data,
  reating,
  loading,
  news,
  accessory,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="main__container container">
        <div className="main__content">
          <section className="main__first sector">
            <div className="main__first-left">
              <h1>Техномир</h1>
              <p>Найдется все</p>
              <div>
                <Button
                  text="Вперед к покупкам"
                  type={EButton.button}
                  onClick={() => {
                    navigate('shop');
                  }}
                />
              </div>
            </div>
            <div className="main__first-right">
              <LazyLoadImage src={Img} effect="blur" />
            </div>
          </section>
          <section className="main__news sector">
            <News loading={loading} data={news} />
          </section>
          <section className="main__second sector" id="sale">
            <header className="main__second-header">
              <h2 className="main__second-title title">Скидки в нашем магазине:</h2>
              <div className="main__second-button">
                <ButtonSlider refs={[navigationPrevRef, navigationNextRef]} />
              </div>
            </header>
            <div className="main__second-body">
              <div className="main__second-slider">
                <SliderProductMain
                  data={discount}
                  count="4"
                  buttons={[navigationPrevRef, navigationNextRef]}
                  type="discount"
                  loading={loading}
                />
              </div>
            </div>
          </section>
          <section className="main__third sector">
            <header>
              <h2 className="main__third-title title">Бренды в нашем магазине:</h2>
              <div className="main__third-button">
                <ButtonsList data={brands} onClick={changeBrend} />
              </div>
            </header>
            <div className="main__third-body">
              <div className="main__third-slider">
                <SliderProductMain data={data} count={'4'} delay={3500} loading={loading} />
              </div>
            </div>
          </section>
          <section className="main__four sector">
            <header>
              <h2 className="main__four-title title">Популярные товары:</h2>
            </header>
            <div className="main__four-body">
              <div className="main__four-slider">
                <SliderProductMain data={reating} count={'4'} delay={3500} loading={loading} />
              </div>
            </div>
          </section>
          <section className="main__five sector">
            <header>
              <h2 className="main__five-title title">Аксесуары:</h2>
            </header>
            <div className="main__five-body">
              <div className="main__five-slider">
                <SliderProductMain data={accessory} count={'4'} delay={3500} loading={loading} />
              </div>
            </div>
          </section>
          <section className="main__six sector">
            <MapContent title="Наш магазин" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
