import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function ErrorFieldInfo({ error, touched }) {
  const [errorMessage, setErrorMessage] = useState(error);
  const [hiddenClass, setHiddenClass] = useState(error);

  useEffect(() => {
    if (touched && error) {
      setErrorMessage(error);
      setHiddenClass('');

      return;
    }

    setHiddenClass(' form-hidden-errors');
    if (!error) {
      return;
    }

    setTimeout(() => {
      setErrorMessage(error);
    }, 500);
  }, [touched, error]);

  return (
    <div className={`form-input-errors${hiddenClass}`}>{errorMessage}</div>
  );
}

ErrorFieldInfo.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool
};

export default ErrorFieldInfo;
