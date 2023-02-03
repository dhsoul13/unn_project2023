import React from 'react';
import BreadCrumbs from '../../breadCrumbs';
import { ILeftLayout } from './interface';

const LeftLayout: React.FC<ILeftLayout> = ({ functional, children, title, classList }) => (
  <div className={`${classList} left-layout`}>
    <div className={`${classList}__container container left-layout__container`}>
      <div className={`${classList}__content left-layout__content`}>
        <div className={`${classList}__header left-layout__header`}>
          <div className={`${classList}__header-left`}>
            <div className={`${classList}__header-breadCrumbs  left-layout__header-breadCrumbs`}>
              <BreadCrumbs />
            </div>
            <h2 className={`${classList}__header-title  left-layout__header-title`}>{title}</h2>
          </div>
          <div className={`${classList}__header-right left-layout__header-right`}>сортировка</div>
        </div>
        <div className={`${classList}__body left-layout__body`}>
          <div className={`${classList}__functionals left-layout__functionals`}>{functional}</div>
          <div className={`${classList}__main left-layout__main`}>{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default LeftLayout;
