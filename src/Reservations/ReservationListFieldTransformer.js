class ReservationListFieldTransformer {
  transformField(data, props) {
    const slotFactory = props.slotFactory ?? null;
    const openModalCallback = props.openModalCallback ?? null;
    const closeModalCallback = props.closeModalCallback ?? null;
    if (slotFactory === null || openModalCallback === null || closeModalCallback === null) {
      throw new Error('incorrect input for transform');
    }

    data.state = slotFactory.create(data.state);
    data.tileClassNames = [data.state.getTileClassName()];
    if (data.state.isAllowedInteraction()) {
      data.tileClassNames.push('tile-interactive');
    }

    data.onClick = openModalCallback(data.state.getModal(data, closeModalCallback));

    return data;
  }
}
export default ReservationListFieldTransformer;
