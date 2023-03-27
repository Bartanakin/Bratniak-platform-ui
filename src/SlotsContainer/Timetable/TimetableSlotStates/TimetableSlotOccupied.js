import store from '../../../Redux/store';
import ReserveSlotModal from '../ReserveSlotModal/ReserveSlotModal';
import { SLOT_STATE_FREE, SLOT_STATE_OCCUPIED } from './SlotState';

class TimetableSlotOccupied {
  getTileClassName() {
    return 'occupied-tile';
  }

  getTileStateName(roomNumber, t) {
    return t(`slots.tile_states.${SLOT_STATE_OCCUPIED}`, { roomNumber });
  }

  isAllowedInteraction() {
    return store.getState().login.isLoggedIn;
  }

  getModal(data, close) {
    if (this.isAllowedInteraction()) {
      return <ReserveSlotModal data={data} closeCallback={close} />;
    }

    return '';
  }
}
export default TimetableSlotOccupied;
