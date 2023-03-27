import PropTypes from 'prop-types';
import './Timetable.scss';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import TimetableColumn from './TimetableColumn';
import DateConverter from '../../Utils/Date/DateConverter';
import Container from '../../DependecyInjection/Container';
import useModal from '../../Utils/Modal/useModal';

function Timetable({ day, columns, reloadParentContent }) {
  const [modal, setModal] = useState('');
  const { openCallback, closeCallback, triggerModal } = useModal(setModal);
  return (
    <div className="timetable--content">
      <div className="timetable--day-info">{(new DateConverter()).formatDate(day)}</div>
      <div className="timetable--column-container">
        { columns.map(column => (
          <TimetableColumn
            title={column.title}
            slots={column.slots}
            key={column.id}
            createModalCallback={openCallback}
            closeModalCallback={() => {
              closeCallback();
              reloadParentContent();
            }}
          />
        )) }
      </div>
      <Popup
        open={triggerModal}
        nested
        className={(new Container()).get('Theme').getDecoratedClassName('popup')}
        closeOnDocumentClick={false}
      >
        {modal}
      </Popup>
    </div>
  );
}

Timetable.propTypes = {
  day: PropTypes.objectOf(Date),
  columns: PropTypes.array,
  reloadParentContent: PropTypes.func
};

export default Timetable;
