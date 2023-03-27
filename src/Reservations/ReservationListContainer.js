import axios from 'axios';
import { useCallback, useState } from 'react';
import Popup from 'reactjs-popup';
import ReservationListFiltersContainer from './ReservationListFiltersContainer';
import ListContainer from '../Utils/List/ListTile/ListContainer';
import { getReservationsResource } from '../Fetches/Resources';
import ReservationTile from './ReservationTile';
import SlotFactory from '../SlotsContainer/Timetable/TimetableSlotStates/SlotFactory';
import Container from '../DependecyInjection/Container';
import useModal from '../Utils/Modal/useModal';
import ReservationListFieldTransformer from './ReservationListFieldTransformer';

function ReservationListContainer() {
  const generateTile = field => (<ReservationTile field={field} />);
  const [fields, setFields] = useState([]);
  const [fieldsError, setFieldsError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [modal, setModal] = useState('');
  const { openCallback, closeCallback, triggerModal } = useModal(setModal);

  const onSubmit = useCallback(async (payload, actions) => {
    const fieldTransformer = new ReservationListFieldTransformer();
    const slotFactory = new SlotFactory();

    try {
      setFields([]);
      setFieldsError(null);
      setIsPending(true);
      const data = await axios.get(getReservationsResource(), payload);
      setIsPending(false);
      setFields(data.data.map(field => fieldTransformer.transformField(
        field,
        { slotFactory, openModalCallback: openCallback, closeModalCallback: closeCallback })
      ));
    } catch (err) {
      setIsPending(false);
      setFieldsError('error');
    }
  }, [openCallback, closeCallback]);

  return (
    <>
      <ReservationListFiltersContainer onSubmit={onSubmit} />
      <ListContainer
        fields={fields}
        generateTile={generateTile}
        isPending={isPending}
        errors={fieldsError}
      />
      <Popup
        open={triggerModal}
        nested
        className={(new Container()).get('Theme').getDecoratedClassName('popup')}
        closeOnDocumentClick={false}
      >
        {modal}
      </Popup>
    </>
  );
}

ReservationListContainer.propTypes = {};

export default ReservationListContainer;
