import SlotFactory from '../SlotsContainer/Timetable/TimetableSlotStates/SlotFactory';

class ReservationListField {
    constructor(data) {
        this.id = data.id;
        this.machineName = data.machineName;
        this.date = data.date;
        this.hourFrom = data.hourFrom;
        this.hourTo = data.hourTo;
        this.roomNumber = data.roomNumber;
        this.state = data.state;
    }

    transformField(props) {
        const slotFactory = props.slotFactory ?? null;
        const openModalCallback = props.openModalCallback ?? null;
        const closeModalCallback = props.closeModalCallback ?? null;
        if (slotFactory === null || openModalCallback === null || closeModalCallback === null) {
            throw new Error('incorrect input for transform');
        }
        this.state = slotFactory.create(this.state);
        this.tileClassNames = [this.state.getTileClassName()];
        if (this.state.isAllowedInteraction()) {
            this.tileClassNames.push('tile-interactive');
        }

        this.onClick = openModalCallback(this.state.getModal(this, closeModalCallback));
    }
}
export default ReservationListField;
