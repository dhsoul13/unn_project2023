import React from 'react';
import SearchInput from '../inputs/SearchInput';
import SliderButtons from '../sliders/SliderButtons';
import { ESliderButton } from '../sliders/SliderButtons/interface';
import { IMapContent } from './interface';

const MapContent: React.FC<IMapContent> = ({ title, data }) => (
  <section className="map">
    <div className="map__content">
      <header className="map__header">
        <h2 className="map__title title">{title}</h2>
        <div className="map__search">
          <SearchInput
            value="1"
            onChange={() => {
              alert(1);
            }}
            exit={() => {
              alert(2);
            }}
          />
        </div>
      </header>
      <div className="map__body">
        <section className="map__slider">
          <SliderButtons delay={10000} type={ESliderButton.li} data={data} />
        </section>

        <section className="map__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4918fd3b4d76a87aa17a661a2ae02b54412b4ea8b4f0886f45e5c0e26d89e5e4&amp;source=constructor"
            width="100%"
            height="500"></iframe>
        </section>
      </div>
    </div>
  </section>
);

export default MapContent;
