import PropTypes from 'prop-types';
import './TimetableSlot.scss';
import { useTranslation } from 'react-i18next';

function TimetableSlot({ startingHour, endingHour, roomNumber, state, createModalCallback, closeModalCallback, id }) {
  const { t } = useTranslation();

  return (
    <div
      className={`timetable--slot--content tile ${state.isAllowedInteraction() ? 'tile-interactive' : ''} ${state.getTileClassName()}`}
      onClick={createModalCallback(state.getModal({ id, roomNumber }, closeModalCallback))}
    >
      <div className="timetable--slot--hour">{ `${t('timetable.from')}: ${startingHour}` }</div>
      <div className="timetable--slot--hour">{ `${t('timetable.to')}: ${endingHour}` }</div>
      <div className="timetable--slot--state">{ state.getTileStateName(roomNumber, t) }</div>
    </div>
  );
}

TimetableSlot.propTypes = {
  startingHour: PropTypes.string,
  endingHour: PropTypes.string,
  roomNumber: PropTypes.string,
  state: PropTypes.object,
  createModalCallback: PropTypes.func,
  closeModalCallback: PropTypes.func,
  id: PropTypes.number
};

export default TimetableSlot;
