import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import { changeSlotState } from '../../../../Fetches/Resources';
import SuccessfulState from './SuccessfulState';
import UnsuccessfulState from './UnsuccessfulState';

class LoadingState {
  constructor(setModalState) {
    this.setModalState = setModalState.bind(this);
    this.guard = false;
  }

  setGuard(newGuard) {
    this.guard = newGuard;
  }

  submit(id, payload) {
    if (this.guard) {
      return;
    }

    this.guard = true;
    axios.patch(changeSlotState(id), payload).then((() => {
      this.setModalState(new SuccessfulState(this.setModalState));
    })).catch(() => {
      this.setModalState(new UnsuccessfulState(this.setModalState));
    }).finally(this.setGuard.bind(this, false));
  }

  getContent() {
    return (
      <MoonLoader
        size={70}
        aria-label="Loading Spinner"
      />
    );
  }
}

export default LoadingState;
