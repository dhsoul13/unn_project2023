import React from 'react';
import Button from '../../button';
import Form from '../../form';

const FilterProduct = () => (
  <div>
    <div>
      <Form
        inputs={[
          {
            id: 'name',
            name: 'name',
            placeholder: 'name',
            title: 'Бренд',
          },
        ]}>
        <h3>Фильтер</h3>
      </Form>
    </div>
  </div>
);

export default FilterProduct;
