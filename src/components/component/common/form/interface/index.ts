import React from 'react';

interface Input {
  id: string;
  name: string;
  placeholder: string;
  title: string;
}

interface ICheckBox {
  name: string;
  value: string;
  text: string;
}

export interface IForm {
  children?: React.ReactElement;
  inputs?: Input[];
  checkbox?: Array<{
    title: string;
    type: string;
    elements: ICheckBox[];
  }>;
}
