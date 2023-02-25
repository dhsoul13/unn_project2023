import BreadCrumbs from 'components/component/common/breadCrumbs';
import ButtonsList from 'components/component/common/buttonsList';
import { Field, Form, Formik } from 'formik';
import { fields } from 'helpers/fields';
import { IFields } from 'helpers/fields/interface';
import React from 'react';

const AddProductPage: React.FC<{
  dataTegs: Array<any>;
  loading: boolean;
}> = ({ dataTegs, loading }) => (
  <section className="addproduct">
    <div className="addproduct__container container">
      <header className="addproduct__header">
        <BreadCrumbs />
        <h2 className="addproduct__title title">Добавить товар</h2>
      </header>
      <div className="addproduct__body">
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
          }}>
          <Form>
            <Field name="type" component="select">
              <option value="smartphone">Смартфон</option>
              <option value="accessories">Аксессуары</option>
              <option value="components">Комплектующие</option>
            </Field>

            {fields.map((el: IFields) => (
              <Field name={el.name} key={el.key} as={el.as}>
                {({ field, form, meta }: any) => (
                  <div>
                    <span>{el.title}</span>
                    <input type={el.type} {...field} placeholder={el.placeholder} />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
            ))}

            <div className="addproduct__tags">
              <h2>Тэги:</h2>
              <ButtonsList data={dataTegs} onClick={(el) => {}} />
              <Field name={'tags'} />
            </div>

            <Field name={'discription'} as="textarea" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  </section>
);

export default AddProductPage;
