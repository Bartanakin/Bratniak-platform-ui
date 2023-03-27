import store from '../../../Redux/store';
import ReserveSlotModal from '../ReserveSlotModal/ReserveSlotModal';
import { SLOT_STATE_FREE, SLOT_STATE_RESERVED } from './SlotState';

class TimetableSlotReserved {
  getTileClassName() {
    return 'reserved-tile';
  }

  getTileStateName(roomNumber, t) {
    return t(`slots.tile_states.${SLOT_STATE_RESERVED}`, { roomNumber });
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
export default TimetableSlotReserved;
