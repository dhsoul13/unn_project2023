import { schemaReviws } from 'helpers/validate';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteModal } from 'store/reducers/modalreducer';
import Form from '../form';
import Stars from '../stars';

const ModalWindow = ({ text, title, form }: any) => {
  const [stars, setStars] = useState<number | null>(2);

  const dispath = useDispatch();
  return (
    <div className="modal">
      <div className="modal__container">
        <section className="modal__contant">
          <header className="modal__header">
            <h2 className="modal__title title">{title}</h2>
            <button
              className="modal__button"
              type="button"
              autoFocus
              onClick={() => {
                dispath(deleteModal());
              }}>
              x
            </button>
          </header>
          <section className="modal__body">
            <p className="modal__text">{text}</p>
            <article className="modal__form">
              {form ? (
                <Form
                  initialValues={{}}
                  inputs={[
                    {
                      id: 'text',
                      name: 'text',
                      placeholder: 'написать отзыв',
                      title: '',
                      textarea: true,
                    },
                  ]}
                  schema={schemaReviws}
                  onSubmit={(value, actions) => {
                    // eslint-disable-next-line no-alert
                    alert(JSON.stringify({ ...value, stars }));

                    dispath(deleteModal());
                  }}>
                  <>
                    <Stars value={stars} onChange={setStars} />
                  </>
                </Form>
              ) : (
                <></>
              )}
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ModalWindow;
