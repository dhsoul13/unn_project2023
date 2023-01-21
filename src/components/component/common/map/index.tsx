import React from 'react';

const MapContent: React.FC<{
  title: string;
}> = ({ title }) => (
  <div className="map">
    <div className="map__content">
      <div className="map__header">
        <h2 className="title">{title}</h2>
      </div>
      <div className="map__body">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4918fd3b4d76a87aa17a661a2ae02b54412b4ea8b4f0886f45e5c0e26d89e5e4&amp;source=constructor"
          width="100%"
          height="500"></iframe>
      </div>
    </div>
  </div>
);

export default MapContent;
