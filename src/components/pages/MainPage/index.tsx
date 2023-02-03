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

interface IMainProduct {
  discount: Array<any>;
  changeBrend: (param: string) => void;
  data: Array<any>;
  map: Array<any>;
}

const MainPage: React.FC<IMainProduct> = ({ discount, changeBrend, data, map }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="main__container container">
        <div className="main__content">
          <div className="main__first sector">
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
          </div>
          <div className="main__second sector" id="sale">
            <div className="main__second-header">
              <h2 className="main__second-title title">Скидки в нашем магазине:</h2>
              <div className="main__second-buttons">
                <div ref={navigationPrevRef} className="main__second-button">
                  <Arrows />
                </div>
                <div ref={navigationNextRef} className="main__second-button">
                  <Arrows />
                </div>
              </div>
            </div>
            <div className="main__second-slider sector">
              <SliderProductMain
                data={discount}
                count="4"
                buttons={[navigationPrevRef, navigationNextRef]}
                type="discount"
              />
            </div>
            <div className="main__third-slider sector" id="company">
              <h2 className="main__third-title title">Бренды в нашем магазине:</h2>
              <ButtonsList
                data={[
                  {
                    title: 'Apple',
                    img: '',
                  },
                  {
                    title: 'Huawel',
                    img: '',
                  },
                  {
                    title: 'Samsung',
                    img: '',
                  },
                  {
                    title: 'Xiaomi',
                    img: '',
                  },
                ]}
                onClick={changeBrend}
              />
              <div>
                <SliderProductMain data={data} count={'4'} delay={3500} />
              </div>
            </div>

            <div className="main__four-slider sector">
              <MapContent title={'Наши локации'} data={map} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
