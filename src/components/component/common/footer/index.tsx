import React from 'react';
import { footerLinks } from '../../../../helpers/footerLinks';
import { IFooterLinksAbout, IFooterLinksSrc } from '../../../../helpers/footerLinks/interface';

const Footer = () => (
  <div className="footer">
    <div className="footer__container container">
      <div className="footer__content">
        <div className="footer__section-1">
          <ul className="footer__links">
            {footerLinks.about.map((el: IFooterLinksAbout) => (
              <li key={el.id} className={'footer__link link'}>
                {el.title}
              </li>
            ))}
          </ul>
          <ul className="footer__links">
            {footerLinks.shop.map((el: IFooterLinksAbout) => (
              <li key={el.id} className={'footer__link link'}>
                {el.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__section-2">
          <ul className="footer__svgs">
            {footerLinks.src.map((el: IFooterLinksSrc) => (
              <li key={el.id} className={'footer__svg effects-svg'}>
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
