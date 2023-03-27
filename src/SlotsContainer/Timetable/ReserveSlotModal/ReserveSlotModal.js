import PropTypes from 'prop-types';
import 'reactjs-popup/dist/index.css';
import './ReserveSlotModal.scss';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import InitialState from './ModalStates/InitialState';
import TextFilterField from '../../../Utils/List/InputTemplates/TextFilterField';
import OkButton from '../../../Utils/Buttons/OkButton';
import XButton from '../../../Utils/Buttons/XButton';
import SlotStateInput from '../../../Utils/List/ConcreteInputs/SlotStateInput';
import { RESERVATION_LIST_VALIDATION_SCHEMA_PUBLIC, RESERVATION_LIST_VALIDATION_SCHEMA_RECEPTIONIST } from './ValidationSchema';
import { allStates, SLOT_STATE_OCCUPIED, SLOT_STATE_RESERVED } from '../TimetableSlotStates/SlotState';

const createModal = (params, submit) => (
  <Formik
    initialValues={{ roomNumber: params.roomNumber, slotState: params.loggedInDependant.defaultSlotState }}
    validationSchema={params.loggedInDependant.validationSchema}
    onSubmit={values => {
      submit(params.id, {
        state: values.slotState,
        roomName: values.roomName
      });
    }}
  >
    {internalParams => (
      <Form onSubmit={internalParams.handleSubmit}>
        <TextFilterField label="Room number" name="roomNumber" required />
        <SlotStateInput loggedInstates={params.loggedInDependant.visibleSlotStates} />
        <div className="reserve-slot-modal--input-section">
          <OkButton onClick={internalParams.submitForm} />
          <XButton onClick={params.closeCallback} />
        </div>
      </Form>
    )}
  </Formik>
);

const getLoggedInDependantParams = loggedIn => {
  if (loggedIn) {
    return {
      validationSchema: RESERVATION_LIST_VALIDATION_SCHEMA_RECEPTIONIST,
      defaultSlotState: SLOT_STATE_OCCUPIED,
      visibleSlotStates: allStates()
    };
  }

  return {
    validationSchema: RESERVATION_LIST_VALIDATION_SCHEMA_PUBLIC,
    defaultSlotState: SLOT_STATE_RESERVED,
    visibleSlotStates: [SLOT_STATE_RESERVED]
  };
};

function ReserveSlotModal({ data, closeCallback }) {
  const loggedIn = useSelector(state => state.login.isLoggedIn);
  const [modalState, setModalState] = useState(new InitialState(() => {}, createModal));
  modalState.setModalState = setModalState;
  return (
    <div className="reserve-slot-modal">
      { modalState?.getContent({
        id: data.id,
        roomNumber: data.roomNumber ?? '',
        loggedInDependant: getLoggedInDependantParams(loggedIn),
        closeCallback
      })}
    </div>
  );
}

ReserveSlotModal.propTypes = {
  data: PropTypes.object,
  closeCallback: PropTypes.func
};

export default ReserveSlotModal;
