/* eslint-disable import/prefer-default-export */

export const showError = (ev: any, el: any) =>
  ev[el]
    ? {
        elem: <div className="form__errors">{ev[el]}</div>,
        isError: true,
      }
    : {
        elem: <></>,
        isError: false,
      };
