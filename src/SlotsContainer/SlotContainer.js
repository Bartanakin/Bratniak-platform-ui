import { useEffect, useState } from 'react';
import axios from 'axios';
import DayPicker from './DayPicker/DayPicker';
import Timetable from './Timetable/Timetable';
import useFetch from '../Fetches/useFetch';
import { getCalendarResource, getDaysForward } from '../Fetches/Resources';
import LoadingTimetable from './Timetable/LoadingTimetable';
import ErrorTimetable from './Timetable/ErrorTimetable';

function SlotsContainer() {
  const [seed, setSeed] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { data: daysForward, error: daysError, isPending: daysArePending } = useFetch(getDaysForward());

  const [calendar, setCalendar] = useState(null);
  const [calendarError, setCalendarError] = useState(null);
  const [calendarIsPending, setCalendarIsPending] = useState(true);
  useEffect(() => {
    setCalendar(null);
    setCalendarError(null);
    setCalendarIsPending(true);
    axios.get(getCalendarResource(selectedDate))
      .then(data => {
        setCalendarIsPending(false);
        setCalendar(data.data);
      })
      .catch(() => {
        setCalendarIsPending(false);
        setCalendarError('error');
      });
  }, [selectedDate, seed]);

  const reload = () => {
    setSeed(Math.random());
  };

  return (
    <div>
      { !daysArePending && !daysError && (
        <DayPicker
          className="slot-container"
          daysForward={daysForward.daysFromNow}
          selectedDate={selectedDate}
          reloadParentContent={setSelectedDate}
        />
      ) }
      { (daysArePending || calendarIsPending) && <LoadingTimetable /> }
      { (daysError || calendarError) && <ErrorTimetable /> }
      { !daysArePending && !daysError && !calendarIsPending && !calendarError && (
        <Timetable
          day={selectedDate}
          columns={calendar.columns}
          reloadParentContent={reload}
          key={seed}
        />
      ) }
    </div>
  );
}

SlotsContainer.propTypes = {};

export default SlotsContainer;
