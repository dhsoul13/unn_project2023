/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';

type TUseFindDate = [string, any, any];

export const useFindDate = (): TUseFindDate => {
  const [find, setFind] = useState<string>('');

  useEffect(() => {}, [find]);

  const handlerChange = (value: string) => {
    setFind(value);
  };

  const handlerExit = () => {
    setFind('');
  };

  return [find, handlerChange, handlerExit];
};
