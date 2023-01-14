import { useFormik } from 'formik';
import React from 'react';
import Button from '../button';
import { EButton } from '../button/interface';
import Input from '../inputs';
import { IForm } from './interface';

const Form: React.FC<IForm> = ({ children, inputs }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {inputs.map((el) => (
          <Input
            placeholder={el.placeholder}
            title={el.title}
            id={el.id}
            name={el.name}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        ))}

        <button>424</button>
        <Button text="Применить" type={EButton.button} />
      </form>
    </>
  );
};

export default Form;
