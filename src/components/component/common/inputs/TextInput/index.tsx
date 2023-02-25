import { Field } from 'formik';
import React, { useState } from 'react';
import { IInput } from '../interface';

const Input: React.FC<IInput> = ({
  placeholder,
  title,
  id,
  name,
  error,
  type,
  textarea,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(!!type);

  const handlerClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input">
      <h2 className="input__title">{title}</h2>
      <div className="input__container">
        {!textarea ? (
          <>
            {' '}
            <Field
              id={id}
              name={name}
              placeholder={placeholder}
              value={undefined}
              className={`input__input ${error ? 'isError' : ''}`}
              type={showPassword ? 'password' : 'text'}
              defaultValue={value[name] || ''}
            />
            {type ? (
              <h3
                className="input__show"
                onClick={() => {
                  handlerClick();
                }}>
                Показать пароль
              </h3>
            ) : (
              ''
            )}
          </>
        ) : (
          <>
            <Field
              id={id}
              name={name}
              placeholder={placeholder}
              value={undefined}
              className={`input__textarea ${error ? 'isError' : ''}`}
              as={'textarea'}
              defaultValue={value[name] || ''}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
