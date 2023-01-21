/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { ITimer } from './iterface';

export const timer = ({ callback, time }: ITimer) => {
  return setTimeout(() => {
    callback();
  }, time);
};
