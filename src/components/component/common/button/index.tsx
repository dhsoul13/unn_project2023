/* eslint-disable no-unused-expressions */
import React from 'react';
import { IButton } from './interface';

const Button: React.FC<IButton> = ({ text, type, onClick, disabled = false }) => (
  <button
    className="button"
    type={type}
    disabled={disabled}
    onClick={() => {
      onClick ? onClick() : null;
    }}>
    {text}
  </button>
);

export default Button;
