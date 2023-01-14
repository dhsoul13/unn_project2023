import React from 'react';

interface Input {
  id: string;
  name: string;
  placeholder: string;
  title: string;
}

export interface IForm {
  children: React.ReactElement;
  inputs: Input[];
}
