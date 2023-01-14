import React from 'react';
import { IProduct } from '../../../../containers/ShopContainer/interface';

export interface IList<T> {
  data: T[];
  render: (data: T) => React.ReactElement;
}

export interface IProductProbs {
  data: IProduct;
}
