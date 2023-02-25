import { ReactElement } from 'react';

export interface IInput {
  placeholder: string;
  title?: string;
  id: string;
  name: string;
  error?: boolean;
  type?: string;
  textarea?: boolean;
  value?: any;
}

export interface ICheckBox {
  name: string;
  value: string;
  text: string;
  type: string;
}
