import React from 'react';

const AboutPage = () => (
  <article className="about">
    <div className="about__container container">
      <div className="about__content">
        <h2 className="about__title title">Описание нашей компании</h2>
        <div className="about__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde sequi sit rerum dolores
          inventore cumque officiis non eos doloribus vero officia deserunt, repellat et nobis
          cupiditate adipisci excepturi. Natus? Deserunt commodi omnis alias dolorem possimus. Quia
          a quos quibusdam totam voluptatibus dignissimos voluptatum nam sint mollitia ipsam
          deserunt laboriosam quae, sed quasi nostrum, ipsum, magni autem odio reprehenderit? Est!
          Sunt et odit iure voluptas quidem. Magni nihil aspernatur a nobis perspiciatis quae?
          Excepturi consequuntur molestias voluptatem aliquid ipsum quod architecto beatae
          voluptatibus. Cum dolor mollitia ipsum ex eos ullam!
        </div>
        <ul className="about__list">
          <li className="about__item">
            <span>Номер телефон:</span>
            +79366199806
          </li>
          <li className="about__item">
            <span>Email:</span>
            texnomir@ya.ru
          </li>
        </ul>
      </div>
    </div>
  </article>
);

export default AboutPage;
