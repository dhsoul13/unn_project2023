import Arrows from 'assets/svgs/arrows';
import React from 'react';
import { IButtonSlider } from './interface';

const ButtonSlider: React.FC<IButtonSlider> = ({ refs }) => (
  <div className="buttonSlider">
    <div ref={refs[0]} className="buttonSlider__btn">
      <Arrows />
    </div>
    <div ref={refs[1]} className="buttonSlider__btn">
      <Arrows />
    </div>
  </div>
);

export default ButtonSlider;
