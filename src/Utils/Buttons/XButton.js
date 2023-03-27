import PropTypes from 'prop-types';
import './Buttons.scss';

function XButton({ onClick }) {
  return (
    <button className="utils-button-x" type="button" onClick={onClick}>&#10008;</button>
  );
}

XButton.propTypes = {
  onClick: PropTypes.func
};

export default XButton;
