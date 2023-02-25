import { IFields } from './interface';

export const fields: Array<IFields> = [
  {
    key: 0,
    name: 'title',
    title: 'Название продукта',
    placeholder: 'Введите название',
    type: 'text',
  },
  {
    key: 1,
    name: 'brand',
    title: 'Название бренда',
    placeholder: 'Введите название бренда',
    type: 'text',
  },
  {
    key: 2,
    name: 'modal',
    title: 'Название модели',
    placeholder: 'Введите название модели',
    type: 'text',
  },
  {
    key: 3,
    name: 'price',
    title: 'Цена:',
    placeholder: 'Введите цену',
    type: 'text',
  },
  {
    key: 4,
    name: 'count',
    title: 'Колличество:',
    placeholder: 'Введите количество',
    type: 'text',
  },
];

export const property = [
  {
    id: 0,
    name: 'storage',
    type: 'smartphone',
  },
  {
    id: 1,
    name: 'ram',
    type: 'smartphone',
  },
  {
    id: 2,
    name: 'batteryCapacity',
    type: 'smartphone',
  },
  {
    id: 3,
    name: 'madeIn',
    type: 'all',
  },
];
