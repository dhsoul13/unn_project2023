import Arrows from 'assets/svgs/arrows';
import { clickOnLinks } from 'utils/clickOnLinksClick';

const helpersMas = [
  {
    name: 'shop',
    rusname: 'Магазин',
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
      {mas.map((el) => (
        <li className="breadcrumbs__item">
          <div>
            <Arrows />
          </div>
          {helpersMas.find((elem) => elem.name === el)?.rusname}
        </li>
      ))}
    </ul>
  );
};
