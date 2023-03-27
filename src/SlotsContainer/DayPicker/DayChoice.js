import PropTypes from 'prop-types';
import Container from '../../DependecyInjection/Container';

function DayChoice({ day, selected, handleClick }) {
  const classes = [
    'day-picker--day-choice',
    (new Container().get('Theme')).getDecoratedClassName('default-tile'),
    'tile',
    'tile-interactive',
    selected ? 'tile-selected' : ''
  ];
  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      <div className="day-picker--day-choice--date">
        {day}
      </div>
    </div>
  );
}

DayChoice.propTypes = {
  day: PropTypes.string,
  selected: PropTypes.bool,
  handleClick: PropTypes.func
};

export default DayChoice;
