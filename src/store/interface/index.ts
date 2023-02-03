import { IValueAlertReducer } from 'store/reducers/alertreducer/interface';
import { IValueModalReducer } from 'store/reducers/modalreducer/interface';

export interface IReducer {
  alert: IValueAlertReducer;
  modal: IValueModalReducer;
}
