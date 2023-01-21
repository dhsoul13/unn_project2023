import React, { useState } from 'react';
import { IUseCertainDate } from './interface';

const useCertainData = <T>({ value, param }: IUseCertainDate<T>) => {
  const [data, setDate] = useState([]);

  return [1313, 31];
};

export default useCertainData;
