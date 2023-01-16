import { IClickOnLinksClick } from './interface';

/* eslint-disable import/prefer-default-export */
export const clickOnLinks = ({ path, callback }: IClickOnLinksClick) => {
  if (typeof path === 'string') {
    callback(path);
  }

  return undefined;
};
