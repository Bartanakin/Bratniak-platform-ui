import PropTypes from 'prop-types';
import { useField } from 'formik';

function MultiselectFilterTemplate({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="single-input-container">
      <select
        className={`modal-text-input${meta.touched && meta.error ? ' input-with-error' : ''}`}
        {...field}
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

MultiselectFilterTemplate.propTypes = {
  label: PropTypes.string,
};

export default MultiselectFilterTemplate;
