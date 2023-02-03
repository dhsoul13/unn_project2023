import { Field } from 'formik';
import React from 'react';
import { ICheckBox } from '../interface';

const CheckBox: React.FC<ICheckBox> = ({ name, value, text, type }) => (
  <>
    <div className="checkbox">
      <label className="checkbox" htmlFor={value}>
        {name === 'color' ? (
          <div
            className="checkbox__color"
            style={{
              backgroundColor: value,
            }}></div>
        ) : (
          <>
            {' '}
            <h2 className="checkbox__title">{text}</h2>
          </>
        )}
      </label>
      <Field type={type} name={name} id={value} value={value} className={'checkbox__input'} />
    </div>
  </>
);

export default CheckBox;
