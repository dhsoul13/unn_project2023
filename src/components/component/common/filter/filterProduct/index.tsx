import { Input } from '@mui/material';
import React from 'react';
import AccordionContainer from '../../accordion';
import Button from '../../button';
import Form from '../../form';

const FilterProduct = () => (
  <div>
    <div>
      <Form
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
        ]}
        initialValues={{}}
        schema={{}}
        onSubmit={(value) => {
          console.log('yes');
        }}>
        <>Фильтер</>
      </Form>
    </div>
  </div>
);

export default FilterProduct;
