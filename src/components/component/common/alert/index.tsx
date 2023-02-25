/* eslint-disable default-case */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAlert } from 'store/reducers/alertreducer';
import { getAlertSelection } from 'store/reducers/alertreducer/selection';

function getTextForTitle(status: string) {
  switch (status) {
    case 'error': {
      return {
        text: 'Ошибка',
        classname: 'err',
      };
    }
    case 'success': {
      return {
        text: 'Успешно',
        classname: 'suc',
      };
    }
    case 'info': {
      return {
        text: 'Информация',
        classname: 'info',
      };
    }
    default: {
      return {
        text: 'Ошибка',
        classname: 'err',
      };
    }
  }
}

const AlertCustom = () => {
  const { text, status } = useSelector(getAlertSelection);

  const dispath = useDispatch();

  const handlerOnClickExit = () => {
    dispath(closeAlert());
  };
  return (
    <div className={`alert__content ${getTextForTitle(status).classname}`}>
      <div
        className="alert__buttons"
        onClick={() => {
          handlerOnClickExit();
        }}>
        x
      </div>
      <div className="alert__information">
        <h2 className="alert__title">{getTextForTitle(status).text}</h2>
        <p className="alert__text">{text}</p>
      </div>
    </div>
  );
};

export default AlertCustom;
