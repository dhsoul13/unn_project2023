import Arrows from 'assets/svgs/arrows';
import { clickOnLinks } from 'utils/clickOnLinksClick';

const helpersMas: Array<{
  name: string;
  rusname: string;
}> = [
  {
    name: 'shop',
    rusname: 'Магазин',
  },
  {
    name: 'info',
    rusname: 'Информация',
  },
  {
    name: 'ourshop',
    rusname: 'Наши магазины',
  },
  {
    name: 'about',
    rusname: 'О нас',
  },
  {
    name: 'delivery',
    rusname: 'Доставка',
  },
  {
    name: 'question',
    rusname: 'Задать нам вопрос',
  },
  {
    name: 'entrance',
    rusname: 'Вход в систему',
  },
  {
    name: 'auth',
    rusname: 'Авторизация',
  },
  {
    name: 'reg',
    rusname: 'Регистрация',
  },
];

/* eslint-disable import/prefer-default-export */
export const GetStrBreadCrumbs = ({ str, navigate }: { str: string; navigate: any }) => {
  const mas = str.split('/').filter((el) => el);
  return (
    <ul className="breadcrumbs__list">
      <li
        className="breadcrumbs__item"
        onClick={() => {
          clickOnLinks({
            path: '/',
            callback: navigate,
          });
        }}>
        Главная
      </li>
      {mas.map((el, index) => (
        <li className="breadcrumbs__item" key={index}>
          <div>
            <Arrows />
          </div>
          {helpersMas.find((elem) => elem.name === el)?.rusname}
        </li>
      ))}
    </ul>
  );
};
