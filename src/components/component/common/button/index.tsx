import React from 'react';
import { IButton } from './interface';

const Button: React.FC<IButton> = ({ text, type }) => (
  <button className="button" type={type}>
    {text}
  </button>
);

export default Button;
