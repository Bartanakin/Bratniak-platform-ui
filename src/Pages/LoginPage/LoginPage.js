import { Form, Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import { getLoginResource, loginState } from '../Fetches/Resources';
import TextFilterField from '../Utils/List/InputTemplates/TextFilterField';
import SubmitButton from '../Utils/Buttons/SubmitButton';
import './Pages.scss';

function LoginPage() {
  const [logged, setLogged] = useState(loginState.logged);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async values => {
    try {
      setIsPending(true);
      const data = await axios.get(getLoginResource(), values);
      setIsPending(false);
      if (data.data.logged && data.data.token) {
        setLogged(true);
        loginState.logged = true;
        loginState.token = data.data.token;
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
    setLogged(false);
    setLogged(false);
    loginState.logged = false;
    loginState.token = null;
  };

  return (
    <div className="login-form--container">
      { !isPending && !logged && error && (
        <div className="login-form--errors">{error}</div>
      )}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      { logged && !isPending && (<button className="login-form--logout-button" type="button" onClick={logout}>Logout</button>)}
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
        >
          <Form>
            <TextFilterField label="Login" name="login" required />
            <TextFilterField label="Password" name="password" required type="password" />
            <SubmitButton />
          </Form>
        </Formik>
      )}
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
