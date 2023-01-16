import { Field } from 'formik';
import React from 'react';
import { IInput } from '../interface';

const Input: React.FC<IInput> = ({ placeholder, title, id, name }) => (
  <div className="input">
    <h2 className="input__titile">{title}</h2>
    <Field id={id} name={name} placeholder={placeholder} value={undefined} />
  </div>
);

export default Input;
