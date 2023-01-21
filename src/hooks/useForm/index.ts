/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { IUseForm } from './interface';

export function useForm<T>({ values }: IUseForm<T>): [T, any] {
  const [data, setDate] = useState(values);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmit = (value: any, action: any) => {
    setDate(value);
  };

  return [data, onSubmit];
}
