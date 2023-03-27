import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SelectFilterField from '../InputTemplates/SelectFilterField';
import { allStates } from '../../../SlotsContainer/Timetable/TimetableSlotStates/SlotState';

function SlotStateInput({ loggedInstates = allStates() }) {
  const { t } = useTranslation();
  return (
    <SelectFilterField label={t('filters.slot_state')} name="slotState">
      {allStates().map(slotState => (
        loggedInstates.includes(slotState) && <option value={slotState}>{t(`slots.states.${slotState}`)}</option>
      ))}
    </SelectFilterField>
  );
}

SlotStateInput.propTypes = {
  loggedInstates: PropTypes.array
};

export default SlotStateInput;
