import { IProduct } from '../../../containers/ShopContainer/interface';

export interface IProductProbs {
  data: IProduct[];
  loading?: boolean;
  showReturn: boolean;
}
