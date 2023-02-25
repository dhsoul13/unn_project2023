import { IProduct } from 'components/containers/ShopContainer/interface';

export interface IBasketPage {
  data: Array<IProduct>;
  price: number;
  loading: boolean;
  priceWithoutSale: number;
  deleteFun: (el: any) => void;
}
