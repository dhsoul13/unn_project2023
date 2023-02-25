export interface INew {
  id: string | number;
  title: string;
  text: string;
  img: any;
}

export interface INews {
  loading: boolean;
  data: Array<INew>;
}
