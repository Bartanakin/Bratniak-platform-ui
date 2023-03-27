import OkButton from '../../../../Utils/Buttons/OkButton';
import XButton from '../../../../Utils/Buttons/XButton';

class SuccessfulState {
  constructor(setModalState) {
    this.setModalState = setModalState;
  }

  submit(id, payload) {}

  getContent(params) {
    return (
      <form>
        <div className="modal-text-block">
          Successfully reserved the slot. Now you need to pay at the reception desk otherwise the slot will be lost.
        </div>
        <OkButton onClick={params.closeCallback} />
      </form>
    );
  }
}

export default SuccessfulState;
