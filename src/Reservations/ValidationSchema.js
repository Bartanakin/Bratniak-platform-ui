import * as yup from 'yup';
import { SLOT_STATE_FREE, SLOT_STATE_OCCUPIED, SLOT_STATE_RESERVED } from '../SlotsContainer/Timetable/TimetableSlotStates/SlotState';

export const RESERVATION_LIST_VALIDATION_SCHEMA = yup.object().shape({
  roomNumber: yup.string(),
  slotState: yup.string().required('Required').oneOf([
    SLOT_STATE_FREE,
    SLOT_STATE_RESERVED,
    SLOT_STATE_OCCUPIED,
  ])
});
