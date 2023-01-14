/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
type TNumberMoney = {
  number: number;
  dicsount: number;
};

export const getMoney = ({ number, dicsount }: TNumberMoney): number => {
  const top = number * (100 - dicsount);
  const x = top / 100;
  return Math.floor(x);
};
