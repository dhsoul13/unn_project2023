import React from 'react';

interface Input {
  id: string;
  name: string;
  placeholder: string;
  title: string;
  type?: string;
}

interface ICheckBox {
  name: string;
  value: string;
  text: string;
}

export interface IForm {
  onSubmit: (value: any, action: any) => any;
  children?: React.ReactElement;
  initialValues: {};
  schema: {};
  inputs?: Input[];
  checkbox?: Array<{
    title: string;
    type: string;
    elements: ICheckBox[];
  }>;
}
