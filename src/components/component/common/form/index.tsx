import { Formik } from 'formik';
import React from 'react';
import { showError } from 'utils/showError';
import AccordionContainer from '../accordion';
import Button from '../button';
import { EButton } from '../button/interface';
import CheckBox from '../inputs/CheckBoxs';
import Input from '../inputs/TextInput';
import { IForm } from './interface';

const Form: React.FC<IForm> = ({ children, inputs, checkbox, initialValues, schema, onSubmit }) => (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(value, actions) => {
        onSubmit(value, actions);
      }}
      validateOnBlur={false}
      validateOnChange={false}>
      {(probs) => (
        <form onSubmit={probs.handleSubmit} className="form">
          <h2 className="form__title">{children}</h2>
          <div className="form__contents">
            <div className="form__inputs">
              {inputs?.map((el, index) => (
                <div key={index} className="form__input">
                  <Input
                    name={el.name}
                    title={el.title}
                    placeholder={el.placeholder}
                    id={el.id}
                    error={showError(probs.errors, el.id).isError}
                    type={el.type}
                    textarea={el.textarea}
                  />
                  {showError(probs.errors, el.id).elem}
                </div>
              ))}
            </div>

            <div className="form__checkboxs">
              {checkbox?.map((el, index) => (
                <AccordionContainer title={el.title} key={index}>
                  <div key={index} className="form__checkbox-content">
                    {el.elements.map((elem, index2) => (
                      <div key={index2} className="form__checkbox">
                        <CheckBox
                          name={elem.name}
                          value={elem.value}
                          text={elem.text}
                          type={el.type}
                        />
                      </div>
                    ))}
                  </div>
                </AccordionContainer>
              ))}
            </div>
          </div>

          <Button text="Применить" type={EButton.submit} />
        </form>
      )}
    </Formik>
  </>
);

export default Form;
