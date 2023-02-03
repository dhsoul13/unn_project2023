import { Input } from '@mui/material';
import React from 'react';
import AccordionContainer from '../../accordion';
import Button from '../../button';
import Form from '../../form';

const FilterProduct = () => (
  <aside>
    <div>
      <Form
        inputs={[
          {
            id: 'min',
            name: 'min',
            placeholder: 'Мин',
            title: 'Цена',
          },
          {
            id: 'max',
            name: 'max',
            placeholder: 'Макс',
            title: '',
          },
        ]}
        checkbox={[
          {
            title: 'Бренд',
            type: 'checkbox',
            elements: [
              {
                text: 'apple',
                name: 'brends',
                value: 'apple',
              },
              {
                text: 'samsung',
                name: 'brends',
                value: 'samsung',
              },
              {
                text: 'xiomi',
                name: 'brends',
                value: 'xiomi',
              },
              {
                text: 'sony',
                name: 'brends',
                value: 'sony',
              },
            ],
          },
          {
            title: 'Скидка',
            type: 'radio',
            elements: [
              {
                text: 'Со скидкой',
                name: 'sale',
                value: 'true',
              },
              {
                text: 'Без скидки',
                name: 'sale',
                value: 'false',
              },
            ],
          },
          {
            title: 'ОЗУ',
            type: 'radio',
            elements: [
              {
                text: '12 гб',
                name: 'ram',
                value: '12',
              },
              {
                text: '8 гб',
                name: 'ram',
                value: '8',
              },
              {
                text: '6 гб',
                name: 'ram',
                value: '6',
              },
              {
                text: '4 гб',
                name: 'ram',
                value: '4',
              },
              {
                text: '2 гб',
                name: 'ram',
                value: '2',
              },
            ],
          },
          {
            title: 'Встроенная память',
            type: 'radio',
            elements: [
              {
                text: '32 гб',
                name: 'storage',
                value: '12',
              },
              {
                text: '16 гб',
                name: 'storage',
                value: '16',
              },
              {
                text: '256 гб',
                name: 'storage',
                value: '256',
              },
              {
                text: '512 гб',
                name: 'storage',
                value: '512',
              },
              {
                text: '1 тб',
                name: 'storage',
                value: '1',
              },
              {
                text: '64 кб',
                name: 'storage',
                value: '64',
              },
            ],
          },
          {
            title: 'Цвет',
            type: 'checkbox',
            elements: [
              {
                text: '#000000',
                name: 'color',
                value: 'black',
              },
              {
                text: '#ffff',
                name: 'color',
                value: 'white',
              },
            ],
          },
        ]}
        initialValues={{}}
        schema={{}}
        onSubmit={(value) => {
          console.log('yes');
        }}>
        <>Фильтрация</>
      </Form>
    </div>
  </aside>
);

export default FilterProduct;
