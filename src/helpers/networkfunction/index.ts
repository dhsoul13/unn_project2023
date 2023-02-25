/* eslint-disable camelcase */

import { request } from 'network';
import { EAlertReducer } from 'store/reducers/alertreducer/interface';

interface IGetLikeProduct {
  user_id: number | string | undefined;
  product_id: number | string;
  alertFunct: (str: string, status: EAlertReducer) => void;
}

export const getLikeProduct = ({ user_id, product_id, alertFunct }: IGetLikeProduct) => {
  if (user_id || Number(user_id) === 0) {
    request({
      method: 'GET',
      url: '/like',
      params: {
        id: user_id,
      },
    })
      .then((data) => {
        if (data.length) {
          const { product, id } = data[0];

          if (!product.includes(product_id)) {
            request({
              method: 'PUT',
              url: `/like/${id}`,
              body: {
                id,
                product: [...product, product_id].sort((a, b) => a - b),
              },
            }).then(() => {
              alertFunct('Товар успешно добавлен', EAlertReducer.success);
            });
          } else {
            alertFunct('Элемент уже добавлен', EAlertReducer.error);
          }
        } else {
          request({
            method: 'POST',
            url: `/like`,
            params: {
              id: user_id,
            },
            body: {
              id: user_id,
              product: [product_id],
            },
          })
            .then(() => {
              alertFunct('Товар успешно добавлен', EAlertReducer.success);
            })
            .catch((err) => {
              alertFunct('Техническая ошибка', EAlertReducer.error);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export const getBasketProduct = ({ user_id, product_id, alertFunct }: IGetLikeProduct) => {
  if (user_id || Number(user_id) === 0) {
    request({
      method: 'GET',
      url: '/basket',
      params: {
        id: user_id,
      },
    })
      .then((data) => {
        if (data.length) {
          const { product, id } = data[0];
          request({
            method: 'PUT',
            url: `/basket/${id}`,
            body: {
              id,
              product: [...product, product_id].sort((a, b) => a - b),
            },
          }).then(() => {
            alertFunct('Товар успешно добавлен в корзину', EAlertReducer.success);
          });
        } else {
          request({
            method: 'POST',
            url: `/basket`,
            params: {
              id: user_id,
            },
            body: {
              id: user_id,
              product: [product_id],
            },
          })
            .then(() => {
              alertFunct('Товар успешно добавлен в корзину', EAlertReducer.success);
            })
            .catch((err) => {
              alertFunct('Техническая ошибка', EAlertReducer.error);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
