import PropTypes from 'prop-types';
import './TimetableSlot.css';

function TimetableFreeSlot({ startingHour, endingHour, state, key }) {
  return (
    <div className="timetable--slot--content tile default-tile">
      <div className="timetable--slot--hour">{ `From: ${startingHour}` }</div>
      <div className="timetable--slot--hour">{ `To: ${endingHour}` }</div>
      <div className="timetable--slot--state">{ state }</div>
    </div>
  );
}

TimetableFreeSlot.propTypes = {
  startingHour: PropTypes.string,
  endingHour: PropTypes.string,
  state: PropTypes.string,
  key: PropTypes.number
};

export default TimetableFreeSlot;
