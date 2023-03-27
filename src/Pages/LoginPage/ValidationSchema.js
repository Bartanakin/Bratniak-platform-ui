import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object().shape({
  login: yup.string().required('Required'),
  password: yup.string().required('Required')
});
