import { IReg } from 'components/containers/RegistrationContainer/interface';

export interface IRegPage {
  value: IReg;
  onSumbit: (value: any, action: any) => void;
}
