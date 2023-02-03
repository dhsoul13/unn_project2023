import Form from 'components/component/common/form';
import { schemaQuestion } from 'helpers/validate';
import React from 'react';
import { IQuestionPage } from './interface';

const QuestionPage: React.FC<IQuestionPage> = ({ value, onSubmit }) => (
  <section className="question">
    <div className="question__container container">
      <div className="question__content">
        <h2 className="question__title title">Задать вопрос</h2>
        <section className="question__body">
          <div className="question__form">
            <Form
              inputs={[
                {
                  id: 'name',
                  name: 'name',
                  placeholder: 'Введите имя',
                  title: 'Имя',
                },
                {
                  id: 'email',
                  name: 'email',
                  placeholder: 'Введите почту',
                  title: 'Почта',
                },
                {
                  id: 'question',
                  name: 'question',
                  placeholder: 'Введите ваш вопрос',
                  title: 'Ваш вопрос',
                },
              ]}
              initialValues={value}
              schema={schemaQuestion}
              onSubmit={onSubmit}
            />
            <p className="question__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veritatis debitis aut
              placeat obcaecati sint incidunt. Eveniet autem necessitatibus molestiae officiis
              dignissimos sapiente culpa mollitia dolore voluptatem. Sequi, natus temporibus.
            </p>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default QuestionPage;
