/* eslint-disable no-shadow */
import QuestionPage from 'components/pages/QuestionPage';
import { useForm } from 'hooks/useForm';
import React, { useEffect, useState } from 'react';

interface IQuestion {
  email: string;
  name: string;
  question: string;
}

const QuestionContainer = () => {
  const [data, onSubmit] = useForm<IQuestion>({ values: { email: '', name: '', question: '' } });
  return (
    <>
      <QuestionPage value={data} onSubmit={onSubmit} />
    </>
  );
};

export default QuestionContainer;
