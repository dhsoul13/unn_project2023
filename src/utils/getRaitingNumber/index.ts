import { number } from 'yup';

export const getRaitingNumber = ({
  data,
  length,
}: {
  data: Array<{
    raiting: number;
  }>;
  length: number;
}) => data.reduce((acc, el) => acc + el.raiting, 0) / length;
