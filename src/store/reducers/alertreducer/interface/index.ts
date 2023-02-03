/* eslint-disable no-shadow */
export enum EAlertReducer {
  error = 'error',
  success = 'success',
  info = 'info',
}

export interface IValueAlertReducer {
  isActive: boolean;
  status: EAlertReducer;
  text: string;
}
