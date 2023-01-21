import { IAuth } from 'components/containers/AuthContainer/interface';

export interface IAuthPage {
  value: IAuth;
  onSubmit: (value: any, action: any) => void;
}
