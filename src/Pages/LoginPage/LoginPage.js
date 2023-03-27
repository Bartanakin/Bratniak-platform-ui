import { Form, Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getLoginResource } from '../../Fetches/Resources';
import TextFilterField from '../../Utils/List/InputTemplates/TextFilterField';
import SubmitButton from '../../Utils/Buttons/SubmitButton';
import './LoginPage.scss';
import { LOGIN_VALIDATION_SCHEMA } from './ValidationSchema';
import { setLoggedIn } from '../../Redux/store';

function LoginPage() {
  const { t } = useTranslation();
  const logged = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async values => {
    try {
      setIsPending(true);
      const data = await axios.get(getLoginResource(), values);
      setIsPending(false);
      if (data.data.logged && data.data.token) {
        dispatch(setLoggedIn({
          isLoggedIn: true,
          token: data.data.token
        }));
        setError(null);
      } else {
        setError('Error');
      }
    } catch (err) {
      setIsPending(false);
      setError('Error');
    }
  };

  const logout = () => {
    dispatch(setLoggedIn({
      isLoggedIn: false,
      token: ''
    }));
  };

  return (
    <div className="login-form--container">
      { !isPending && !logged && error && (
        <div className="login-form--errors">{error}</div>
      )}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      { logged && !isPending && (<button className="login-form--logout-button" type="button" onClick={logout}>{t('login.logout')}</button>)}
      { isPending && (
        <MoonLoader
          size={70}
          aria-label="Loading Spinner"
        />
      )}
      { !logged && !isPending && (
        <Formik
          initialValues={{
            login: '',
            password: ''
          }}
          onSubmit={onSubmit}
          validationSchema={LOGIN_VALIDATION_SCHEMA}
        >
          <Form>
            <TextFilterField label={t('login.login')} name="login" required />
            <TextFilterField label={t('login.password')} name="password" required type="password" />
            <SubmitButton />
          </Form>
        </Formik>
      )}
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
