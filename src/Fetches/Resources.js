const DOMAIN = 'http://localhost:8001';

export function getCalendarResource(day) {
  return `${DOMAIN}/calendar`;
}

export function getDaysForward() {
  return `${DOMAIN}/days-forward`;
}

export function changeSlotState(slotId) {
  return `${DOMAIN}/slot-state/${slotId}`;
}

export function getReservationsResource() {
  return `${DOMAIN}/reservations-list`;
}

export const loginState = {
  logged: false,
  token: ''
};

export function getLoginResource() {
  return `${DOMAIN}/login`;
}
