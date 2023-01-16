/* eslint-disable import/prefer-default-export */
import { ITimer } from './iterface';

export const timer = ({ callback, time }: ITimer) => {
  setTimeout(() => {
    callback();
  }, time);
  return undefined;
};
