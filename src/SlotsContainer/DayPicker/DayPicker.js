import PropTypes from 'prop-types';
import { addDays, differenceInCalendarDays } from 'date-fns';
import DayChoice from './DayChoice';
import './DayPicker.scss';
import DateConverter from '../../Utils/Date/DateConverter';
import Container from '../../DependecyInjection/Container';

function fromIdToDate(id) {
  return addDays(new Date(), id);
}

function fromDateToId(date) {
  return differenceInCalendarDays(date, new Date());
}

function DayPicker({ daysForward, selectedDate, reloadParentContent }) {
  const days = Array.from(Array(daysForward + 1).keys())
    .map(x => ({ day: (new DateConverter()).formatDate(addDays(new Date(), x)), key: x }));
  function handleClick(id) {
    return () => reloadParentContent(fromIdToDate(id));
  }

  return (
    <div className={(new Container()).get('Theme').getDecoratedClassName('day-picker')}>
      { days.map(day => (
        <DayChoice
          day={day.day}
          key={day.key}
          selected={day.key === fromDateToId(selectedDate)}
          handleClick={handleClick(day.key)}
        />
      )) }
    </div>
  );
}

DayPicker.propTypes = {
  daysForward: PropTypes.number,
  selectedDate: PropTypes.objectOf(Date),
  reloadParentContent: PropTypes.func
};

export default DayPicker;
