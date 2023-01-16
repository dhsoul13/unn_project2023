import { Field } from 'formik';
import React from 'react';
import { ICheckBox } from '../interface';

const CheckBox: React.FC<ICheckBox> = ({ name, value, text, type }) => (
  <>
    <label className="checkbox">
      <h2 className="checkbox__title">{text}</h2>
      <Field type={type} name={name} value={value} className={'checkbox__input'} />
    </label>
  </>
);

export default CheckBox;
