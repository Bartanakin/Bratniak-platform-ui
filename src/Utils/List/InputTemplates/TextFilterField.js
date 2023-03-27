import PropTypes from 'prop-types';
import { useField } from 'formik';
import './FilterField.scss';
import ErrorFieldInfo from './ErrorFieldInfo';
import Container from '../../../DependecyInjection/Container';

function TextFilterField({ label, required = false, type = null, ...props }) {
  const [fields, meta] = useField(props);

  return (
    <div className={`${(new Container()).get('Theme').getDecoratedClassName('single-form-input-container')}`}>
      <div className="xd">
        <input
          className={`${meta.touched && meta.error ? 'form-input-with-error' : ''}`}
          required={required}
          type={type ? type : 'text'}
          {...fields}
          {...props}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          {label}
        </label>
        <ErrorFieldInfo touched={meta.touched} error={meta.error} />
      </div>
    </div>
  );
}

TextFilterField.propTypes = {
  label: PropTypes.string,
  props: PropTypes.array,
  required: PropTypes.bool,
  type: PropTypes.string
};

export default TextFilterField;
