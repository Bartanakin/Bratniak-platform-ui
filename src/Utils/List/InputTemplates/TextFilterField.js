import PropTypes from 'prop-types';
import { useField } from 'formik';

function TextFilterTemplate({ label, ...props }) {
  const [fields, meta] = useField(props);

  return (
    <div className="single-input-container">
      <input
        className={`modal-text-input${meta.touched && meta.error ? ' input-with-error' : ''}`}
        type="text"
        {...fields}
        {...props}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        {label}
      </label>
      <div className="input-errors">{meta.touched && meta.error ? meta.error : ''}</div>
    </div>
  );
}

TextFilterTemplate.propTypes = {
  label: PropTypes.string,
  props: PropTypes.array
};

export default TextFilterTemplate;
