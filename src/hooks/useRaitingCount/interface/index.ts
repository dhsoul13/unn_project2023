import { IProduct } from 'components/containers/ShopContainer/interface';

export interface IRaitinObj {
  product_id: number | string | null;
  numberCount: number;
  numberSum: number;
  numberCountMessange: number;
}

export type IProductWithRaiting = IProduct & {
  raiting: IRaitinObj;
};
