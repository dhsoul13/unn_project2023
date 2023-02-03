/* eslint-disable consistent-return */
import Arrows from 'assets/svgs/arrows';
import { useScroll } from 'hooks/useScroll';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from 'store/interface';
import { timer } from 'utils/timer';
import { closeAlert } from 'store/reducers/alertreducer';
import AlertCustom from '../../alert';
import Footer from '../../footer';
import Header from '../../header';
import { IMainLayout } from './interface';
import ModalWindow from '../../modal';

const MainLayout: React.FC = () => {
  const { scrollPosition, scrollFormCoordinate } = useScroll();
  const [showButton, setButton] = useState<boolean>(false);
  const { isActive } = useSelector((state: IReducer) => state.alert);
  const { isActiveModal, text, title, form } = useSelector((state: IReducer) => state.modal);
  const dispath = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollPosition > 100) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (isActive === true) {
      const time = timer({
        callback: () => {
          dispath(closeAlert());
        },
        time: 3000,
      });

      return () => {
        clearTimeout(time);
      };
    }
  }, [pathname, isActive]);

  return (
    <div className={isActiveModal ? `body isActive` : `body`}>
      <Header />
      <main className="body__content">
        <Outlet />

        <div
          className={`body__top ${showButton ? 'show' : 'disble'}`}
          onClick={() => {
            scrollFormCoordinate(0);
          }}>
          <div className="body__svg">
            <Arrows />
          </div>
          <h2 className={`body__title`}>Вверх</h2>
        </div>

        {isActive ? (
          <div className="alert">
            <AlertCustom />
          </div>
        ) : (
          <></>
        )}
      </main>
      <Footer />
      {isActiveModal ? (
        <>
          <ModalWindow text={text} title={title} form={form} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default MainLayout;
