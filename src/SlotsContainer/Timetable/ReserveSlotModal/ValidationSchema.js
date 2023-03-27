import * as yup from 'yup';

export const RESERVATION_LIST_VALIDATION_SCHEMA = yup.object().shape({
  roomNumber: yup.string(),
  slotState: yup.string().required('Required').oneOf(['free', 'reserved', 'occupied'])
});
