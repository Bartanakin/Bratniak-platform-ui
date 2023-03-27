import { useState } from 'react';
import SlotsContainer from '../SlotsContainer/SlotContainer';
import Container from '../DependecyInjection/Container';
import DryersTheme from '../Themes/DryersTheme';

function DryersPage() {
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

export function setStyling() {
  const container = new Container();
  document.body.classList.remove(...document.body.classList);
  document.querySelector('header')?.classList.remove(...(document.querySelector('header').classList ?? []));
  container.set('Theme', DryersTheme);
  document.body.classList.add(container.get('Theme').getDecoratedClassName('root-layout'));
  document.querySelector('header')?.classList.add(container.get('Theme').getDecoratedClassName('header'));

  return null;
}

export default DryersPage;
