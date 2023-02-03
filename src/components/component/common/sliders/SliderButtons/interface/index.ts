/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-shadow

export enum ESliderButton {
  li = 'li',
  button = 'button',
}

export interface ISliderButton {
  delay: number;
  type: ESliderButton;
  data: Array<any>;
}
