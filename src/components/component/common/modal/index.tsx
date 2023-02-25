import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteModal } from 'store/reducers/modalreducer';

const ModalWindow = ({ text, title, children }: any) => {
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
              <>{children}</>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ModalWindow;
