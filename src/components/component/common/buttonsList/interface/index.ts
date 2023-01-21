export type TDataButtonList = {
  title: string;
  img: string;
};

export interface IButtonsList {
  data: TDataButtonList[];
  onClick: (param: string) => void;
}
