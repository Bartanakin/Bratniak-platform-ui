import XButton from '../../../../Utils/Buttons/XButton';

class UnsuccessfulState {
  constructor(setModalState) {
    this.setModalState = setModalState;
  }

  submit(id, payload) {}

  getContent(params) {
    return (
      <form>
        <div className="modal-text-block">
          There was an error when reserving the slot. Reload the page to check whether you have been pre-empted.
        </div>
        <XButton onClick={params.closeCallback} />
      </form>
    );
  }
}

export default UnsuccessfulState;
