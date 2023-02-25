import { IProduct } from 'components/containers/ShopContainer/interface';
import { INew } from '../../../component/News/interface/index';

export interface IMainProduct {
  discount: Array<IProduct>;
  changeBrend: (param: string) => void;
  data: Array<IProduct>;
  reating: Array<IProduct>;
  accessory: Array<IProduct>;
  loading: boolean;
  news: Array<INew>;
}
