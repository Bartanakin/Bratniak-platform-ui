import PropTypes from 'prop-types';
import './Buttons.scss';

function SubmitButton({ onClick }) {
  return (
    <button className="utils-button-submit" type="submit" onClick={onClick}>&#8618;</button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.func
};

export default SubmitButton;
