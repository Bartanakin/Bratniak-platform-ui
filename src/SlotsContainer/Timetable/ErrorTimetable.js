import { MoonLoader } from 'react-spinners';

function LoadingTimetable() {
  return (
    <div className="timetable--content timetable--temp-info">
      <MoonLoader
        size={70}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

LoadingTimetable.propTypes = {};

export default LoadingTimetable;
