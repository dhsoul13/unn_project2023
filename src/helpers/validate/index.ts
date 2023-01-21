/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schemaQuestion = yup.object().shape({
  name: yup.string().required('Объязательное поле'),
  email: yup.string().email('Не валидный email').required('Объязательное поле'),
  question: yup.string().required('Объязательное поле'),
});

export const schemaAuth = yup.object().shape({
  email: yup.string().email('Не валидный email').required('Объязательное поле'),
  phone: yup.string().matches(phoneRegExp, 'Телефон не валидный').required('Объязательное поле'),
  username: yup.string().required('Объязательное поле'),
  password: yup.string().required('Объязательное поле').min(8, 'Пароль слишком короткий'),
  passwordСheck: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароль не похож')
    .required('Объязательное поле'),
});
