import { ReactElement } from 'react';

export interface IInput {
  placeholder: string;
  title?: string;
  id: string;
  name: string;
}

export interface ICheckBox {
  name: string;
  value: string;
  text: string;
  type: string;
}
