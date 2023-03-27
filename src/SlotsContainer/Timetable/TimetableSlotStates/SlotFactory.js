// eslint-disable-next-line import/named
import { SLOT_STATE_FREE, SLOT_STATE_OCCUPIED, SLOT_STATE_RESERVED } from './SlotState';
import TimetableSlotFree from './TimetableSlotFree';
import TimetableSlotReserved from './TimetableSlotReserved';
import TimetableSlotOccupied from './TimetableSlotOccupied';

class SlotFactory {
  create(inputState) {
    switch (inputState) {
      case SLOT_STATE_FREE:
        return new TimetableSlotFree();
      case SLOT_STATE_RESERVED:
        return new TimetableSlotReserved();
      case SLOT_STATE_OCCUPIED:
        return new TimetableSlotOccupied();
    }

    throw Error('Incorrect slot state');
  }
}

export default SlotFactory;
