/* eslint-disable no-unused-expressions */
import React from 'react';
import { IButton } from './interface';

const Button: React.FC<IButton> = ({ text, type, onClick }) => (
  <button
    className="button"
    type={type}
    onClick={() => {
      onClick ? onClick() : null;
    }}>
    {text}
  </button>
);

export default Button;
