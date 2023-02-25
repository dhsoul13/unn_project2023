import { IProduct } from 'components/containers/ShopContainer/interface';
import { IProductWithRaiting } from 'hooks/useRaitingCount/interface';
import React from 'react';

export interface IList<T> {
  data: T[];
  render: (data: T) => React.ReactElement;
}

export interface IProductProbs {
  data: IProductWithRaiting;
}
