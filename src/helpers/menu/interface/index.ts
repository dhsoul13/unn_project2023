export type TMenuForNewsObj = {
  id: number;
  title: string;
  function: (el: any, data: any) => void;
};

export type TMenuForNews = Array<TMenuForNewsObj>;
