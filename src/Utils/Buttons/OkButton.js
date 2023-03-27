import PropTypes from 'prop-types';
import './Buttons.scss';

function OkButton({ onClick }) {
  return (
    <button className="utils-button-ok" type="button" onClick={onClick}>&#10003;</button>
  );
}

OkButton.propTypes = {
  onClick: PropTypes.func
};

export default OkButton;
