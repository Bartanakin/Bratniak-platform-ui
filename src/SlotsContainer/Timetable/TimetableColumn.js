import PropTypes from 'prop-types';
import TimetableSlot from './TimetableSlot';
import './TimetableColumn.scss';
import SlotFactory from './TimetableSlotStates/SlotFactory';

function TimetableColumn({ title, slots, createModalCallback, closeModalCallback }) {
  return (
    <div className="timetable--column--content">
      <div className="timetable--column--title">{ title }</div>
      <div className="timetable--columns--slot-container">
        { slots.map(slot => (
          <TimetableSlot
            startingHour={slot.startingHour}
            endingHour={slot.endingHour}
            roomNumber={slot.roomNumber}
            state={(new SlotFactory()).create(slot.state)}
            key={slot.id}
            id={slot.id}
            createModalCallback={createModalCallback}
            closeModalCallback={closeModalCallback}
          />
        )) }
      </div>
    </div>
  );
}

TimetableColumn.propTypes = {
  title: PropTypes.string,
  slots: PropTypes.arrayOf(PropTypes.object),
  createModalCallback: PropTypes.func,
  closeModalCallback: PropTypes.func,
};

export default TimetableColumn;
