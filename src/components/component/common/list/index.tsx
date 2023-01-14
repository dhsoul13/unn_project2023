import React from 'react';
import { IList } from './interface';

export default function List<T>(probs: IList<T>) {
  return (
    <ul className="list">
      {probs.data?.map((el, index) => (
        <li className="list__item" key={index}>
          {probs.render(el)}
        </li>
      ))}
    </ul>
  );
}
