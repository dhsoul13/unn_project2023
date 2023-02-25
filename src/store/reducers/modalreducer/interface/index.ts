/* eslint-disable no-shadow */
export enum ETypeModal {
  rewiews = 'rewiews',
  news = 'news',
  none = 'none',
}

export interface IValueModalReducer {
  isActiveModal: boolean;
  typeActiveModal: ETypeModal;
  content?: any;
}

export interface IModalAction {
  type: ETypeModal;
  content: any;
}
