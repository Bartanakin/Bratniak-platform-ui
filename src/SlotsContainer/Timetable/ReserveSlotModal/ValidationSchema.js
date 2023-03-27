import * as yup from 'yup';
import { SLOT_STATE_FREE, SLOT_STATE_OCCUPIED, SLOT_STATE_RESERVED } from '../TimetableSlotStates/SlotState';

export const RESERVATION_LIST_VALIDATION_SCHEMA_PUBLIC = yup.object().shape({
  roomNumber: yup.string().required('Type in your room number'),
  slotState: yup.string().required('Required').oneOf([
    SLOT_STATE_RESERVED,
  ])
});
export const RESERVATION_LIST_VALIDATION_SCHEMA_RECEPTIONIST = yup.object().shape({
  roomNumber: yup.string().required('Type in the room number'),
  slotState: yup.string().required('Select the correct slot state').oneOf([
    SLOT_STATE_FREE,
    SLOT_STATE_OCCUPIED,
    SLOT_STATE_RESERVED
  ])
});
