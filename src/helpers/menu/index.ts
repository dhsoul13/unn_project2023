/* eslint-disable no-shadow */
import { request } from 'network';
import { showModal } from 'store/reducers/modalreducer';
import { ETypeModal } from 'store/reducers/modalreducer/interface';
import { TMenuForNews } from './interface';

export const menuForNews: TMenuForNews = [
  {
    id: 0,
    title: 'Добавить',
    function: (el: any, data: any) => {
      el(
        showModal({
          type: ETypeModal.news,
          content: '',
        })
      );
    },
  },
  {
    id: 1,
    title: 'Редактировать',
    function: (el: any, data: any) => {
      request({ method: 'GET', url: `/news/${data}` }).then((elem: any) => {
        el(
          showModal({
            type: ETypeModal.news,
            content: elem,
          })
        );
      });
    },
  },
  {
    id: 2,
    title: 'Удалить',
    function: (el: any, data: any) => {
      request({
        method: 'DELETE',
        url: `/news/${data}`,
      })
        .then(() => {
          el(0);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
];
