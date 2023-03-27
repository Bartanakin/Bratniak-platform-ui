import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import TextFilterField from '../Utils/List/InputTemplates/TextFilterField';
import { RESERVATION_LIST_VALIDATION_SCHEMA } from './ValidationSchema';
import SubmitButton from '../Utils/Buttons/SubmitButton';
import Container from '../DependecyInjection/Container';
import SlotStateInput from '../Utils/List/ConcreteInputs/SlotStateInput';
import { SLOT_STATE_RESERVED } from '../SlotsContainer/Timetable/TimetableSlotStates/SlotState';

function ReservationListFiltersContainer({ onSubmit }) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ roomNumber: '', slotState: SLOT_STATE_RESERVED }}
      validationSchema={RESERVATION_LIST_VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className={(new Container()).get('Theme').getDecoratedClassName('form-form-container')}>
          <TextFilterField label={t('filters.room_number')} name="roomNumber" />
          <SlotStateInput />
          <div className="single-form-button-container">
            <SubmitButton />
          </div>
        </Form>
      )}
    </Formik>
  );
}

ReservationListFiltersContainer.propTypes = {
  onSubmit: PropTypes.func
};

export default ReservationListFiltersContainer;
