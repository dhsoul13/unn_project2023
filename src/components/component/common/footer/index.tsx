import React from 'react';
import { useNavigate } from 'react-router-dom';
import { footerLinks } from '../../../../helpers/footerLinks';
import { IFooterLinksAbout, IFooterLinksSrc } from '../../../../helpers/footerLinks/interface';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <section className="footer__content">
          <article className="footer__section-1">
            <ul className="footer__links">
              {footerLinks.about.map((el: IFooterLinksAbout) => (
                <li
                  key={el.id}
                  className={'footer__link link'}
                  onClick={() => {
                    navigate(`/${el.src}`);
                  }}>
                  {el.title}
                </li>
              ))}
            </ul>
            <ul className="footer__links">
              {footerLinks.shop.map((el: IFooterLinksAbout) => (
                <li
                  key={el.id}
                  className={'footer__link link'}
                  onClick={() => {
                    navigate(`/${el.src}`);
                  }}>
                  {el.title}
                </li>
              ))}
            </ul>
          </article>
          <article className="footer__section-2">
            <ul className="footer__svgs">
              {footerLinks.src.map((el: IFooterLinksSrc) => (
                <li key={el.id} className={'footer__svg effects-svg'}>
                  {el.title}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
