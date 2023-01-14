import React from 'react';
import SpinerSvg from '../../../../assets/svgs/spiner';

const Spiner = () => (
  <div className="spiner">
    <div className="spiner__content">
      <div className="spiner__box">
        <div className="spiner__box-el ">
          <SpinerSvg />
        </div>
      </div>
      <h2 className="spiner__title">
        Загрузка
        <span className="spiner__point point-1">.</span>
        <span className="spiner__point point-2">.</span>
        <span className="spiner__point point-3">.</span>
      </h2>
    </div>
  </div>
);

export default Spiner;
