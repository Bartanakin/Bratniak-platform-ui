import LoadingState from './LoadingState';

class InitialState {
  constructor(setModalState, createModal) {
    this.setModalState = setModalState.bind(this);
    this.createModal = createModal;
  }

  submit(id, payload) {
    const loadingState = new LoadingState(this.setModalState);
    this.setModalState(() => loadingState);
    loadingState.submit(id, payload);
  }

  getContent(params) {
    return this.createModal(params, this.submit.bind(this));
  }
}

export default InitialState;
