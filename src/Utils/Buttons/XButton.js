import PropTypes from 'prop-types';
import './Buttons.css';

function OkButton({ onClick }) {
  return (
    <button className="ok-button" type="submit" onClick={onClick}>&#10003;</button>
  );
}

OkButton.propTypes = {
  onClick: PropTypes.func
};

export default OkButton;
