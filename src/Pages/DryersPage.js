import { useState } from 'react';
import SlotsContainer from '../SlotsContainer/SlotContainer';

function WashingMachinesPage() {
  const [seed, setSeed] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const reloadContent = date => {
    if (date) {
      setSelectedDate(date);
    }

    setSeed(Math.random());
  };
  return (
    <SlotsContainer
      key={seed}
      reloadContent={reloadContent}
      selectedDate={selectedDate}
    />
  );
}

export default WashingMachinesPage;
