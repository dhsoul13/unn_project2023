import { Input } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AccordionContainer from '../../accordion';
import Button from '../../button';
import Form from '../../form';

const FilterProduct = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
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
              title: 'Тип продукта',
              type: 'checkbox',
              elements: [
                {
                  text: 'Телефоны',
                  name: 'type',
                  value: 'mobile',
                },
                {
                  text: 'Акссесуары',
                  name: 'type',
                  value: 'accessories',
                },
                {
                  text: 'Комплектующее',
                  name: 'type',
                  value: 'components',
                },
              ],
            },
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
                  name: 'discount',
                  value: 'true',
                },
                {
                  text: 'Без скидки',
                  name: 'discount',
                  value: 'false',
                },
              ],
            },
            {
              title: 'ОЗУ',
              type: 'checkbox',
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
              type: 'checkbox',
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
          schema={''}
          onSubmit={(value) => {
            setSearchParams({
              filter: JSON.stringify(value),
            });
          }}>
          <>Фильтрация</>
        </Form>
      </div>
    </aside>
  );
};

export default FilterProduct;
