import { useState } from 'react';

function usePopup(setModal) {
  const [triggerModal, setTriggerModal] = useState(false);

  const openCallback = newModal => {
    if (!newModal) return () => {};

    return (() => {
      setModal(newModal);
      setTriggerModal(current => !current);
    });
  };

  const closeCallback = () => {
    setTriggerModal(false);
  };

  return { openCallback, closeCallback, triggerModal };
}

export default usePopup;
