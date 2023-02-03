import React from 'react';
import Button from '../button';
import { EButton } from '../button/interface';
import { IButtonsList, TDataButtonList } from './interface';

const ButtonsList: React.FC<IButtonsList> = ({ data, onClick }) => (
  <ul className="buttonlist">
    {data.map((el: TDataButtonList, index) => (
      <li className="buttonlist__elem" key={index}>
        <Button
          text={el.title}
          type={EButton.button}
          onClick={() => {
            onClick(el.title);
          }}
        />
      </li>
    ))}
  </ul>
);

export default ButtonsList;
