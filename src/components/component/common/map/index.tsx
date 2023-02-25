import React from 'react';
import SearchInput from '../inputs/SearchInput';
import SliderButtons from '../sliders/SliderButtons';
import { ESliderButton } from '../sliders/SliderButtons/interface';
import Spiner from '../spiner';
import { IMapContent } from './interface';

const MapContent: React.FC<IMapContent> = ({ title }) => (
  <section className="map">
    <div className="map__content">
      <header className="map__header">
        <h2 className="map__title title">{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis quia aliquid
          explicabo, numquam provident fuga at doloribus perferendis laboriosam temporibus! Sequi
          consequuntur beatae veniam libero quo omnis maiores voluptas?
        </p>
      </header>
      <div className="map__body">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4918fd3b4d76a87aa17a661a2ae02b54412b4ea8b4f0886f45e5c0e26d89e5e4&amp;source=constructor"
          width="100%"
          height="500"
          loading="lazy"></iframe>
      </div>
    </div>
  </section>
);

export default MapContent;
