import ReserveSlotModal from '../ReserveSlotModal/ReserveSlotModal';
import Container from '../../../DependecyInjection/Container';
import { SLOT_STATE_FREE } from './SlotState.js';

class TimetableSlotFree {
  getTileClassName() {
    return (new Container()).get('Theme').getDecoratedClassName('default-tile');
  }

  getTileStateName(roomNumber, t) {
    return t(`slots.tile_states.${SLOT_STATE_FREE}`, { roomNumber });
  }

  isAllowedInteraction() {
    return true;
  }

  getModal(data, close) {
    return <ReserveSlotModal data={data} closeCallback={close} />;
  }
}
export default TimetableSlotFree;
