import PropTypes from 'prop-types';
import { useField } from 'formik';
import './FilterField.scss';
import ErrorFieldInfo from './ErrorFieldInfo';
import Container from '../../../DependecyInjection/Container';

function SelectFilterField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={`${(new Container()).get('Theme').getDecoratedClassName('single-form-input-container')}`}>
      <div className="xd">
        <select
          className={`${meta.touched && meta.error ? ' form-input-with-error' : ''}`}
          {...field}
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

SelectFilterField.propTypes = {
  label: PropTypes.string,
};

export default SelectFilterField;
