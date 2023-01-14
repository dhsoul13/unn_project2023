import React from 'react';
import { IInput } from './interface';

const Input: React.FC<IInput> = ({ placeholder, title, id, name, value, onChange }) => (
  <div className="input">
    <h2 className="input__titile">{title}</h2>
    <input
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={'text'}
    />
  </div>
);

export default Input;
