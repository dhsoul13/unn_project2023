/* eslint-disable no-shadow */
export enum EButton {
  submit = 'submit',
  button = 'button',
}

export interface IButton {
  text: string;
  type: EButton;
}
