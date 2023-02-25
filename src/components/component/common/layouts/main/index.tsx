/* eslint-disable consistent-return */
import Arrows from 'assets/svgs/arrows';
import { useScroll } from 'hooks/useScroll';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from 'store/interface';
import { timer } from 'utils/timer';
import { closeAlert } from 'store/reducers/alertreducer';
import { getAlertSelection } from 'store/reducers/alertreducer/selection';
import { schemaReviws } from 'helpers/validate';
import { deleteModal } from 'store/reducers/modalreducer';
import { request } from 'network';
import { url } from 'inspector';
import { v4 as uuidv4 } from 'uuid';
import AlertCustom from '../../alert';
import Footer from '../../footer';
import Header from '../../header';
import ModalWindow from '../../modal';
import Form from '../../form';
import Stars from '../../stars';

const MainLayout: React.FC = () => {
  const { scrollPosition, scrollFormCoordinate } = useScroll();
  const [showButton, setButton] = useState<boolean>(false);
  const { isActive } = useSelector(getAlertSelection);
  const { isActiveModal, typeActiveModal, content } = useSelector((state: IReducer) => state.modal);
  const dispath = useDispatch();
  const { pathname } = useLocation();

  const [stars, setStars] = useState<number | null>(2);

  const navigate = useNavigate();

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
          {typeActiveModal === 'rewiews' ? (
            <ModalWindow text={'дыладыалыдалыда'} title={'Отзыв'}>
              <Form
                initialValues={{}}
                inputs={[
                  {
                    id: 'text',
                    name: 'text',
                    placeholder: 'написать отзыв',
                    title: '',
                    textarea: true,
                  },
                ]}
                schema={schemaReviws}
                onSubmit={(value, actions) => {
                  // eslint-disable-next-line no-alert
                  alert(JSON.stringify({ ...value, stars }));

                  dispath(deleteModal());
                }}>
                <>
                  <Stars value={stars} onChange={setStars} />
                </>
              </Form>
            </ModalWindow>
          ) : (
            <>
              <ModalWindow title={'Новости'}>
                <Form
                  initialValues={{
                    text: content.text || '',
                    title: content.title || '',
                  }}
                  inputs={[
                    {
                      id: 'title',
                      name: 'title',
                      placeholder: 'Название новости',
                      title: 'Название новости',
                    },
                    {
                      id: 'text',
                      name: 'text',
                      placeholder: 'Текст новости',
                      title: 'Текст новости',
                      textarea: true,
                    },
                  ]}
                  schema={schemaReviws}
                  onSubmit={(value, actions) => {
                    if (!content.id) {
                      const id = uuidv4();
                      request({
                        method: 'POST',
                        url: `/news`,
                        body: {
                          id,
                          img: '',
                          title: value.title,
                          text: value.text,
                        },
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      })
                        .then((el) => {
                          navigate(0);
                        })
                        .catch((err) => {
                          console.error(err);
                        });

                      dispath(deleteModal());
                    } else {
                      request({
                        method: 'PUT',
                        url: `/news/${content.id}`,
                        body: {
                          img: '',
                          title: value.title,
                          text: value.text,
                        },
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      })
                        .then((el) => {
                          navigate(0);
                        })
                        .catch((err) => {
                          console.error(err);
                        });
                      dispath(deleteModal());
                    }
                  }}
                />
              </ModalWindow>
            </>
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default MainLayout;
