export type TDataButtonList = {
  title: string;
  img: string;
  param: string;
};

export interface IButtonsList {
  data: TDataButtonList[];
  onClick: (param: string) => void;
}
