import SlotsContainer from '../SlotsContainer/SlotContainer';
import WashingMachinesTheme from '../Themes/WashingMachinesTheme';
import Container from '../DependecyInjection/Container';

function WashingMachinesPage() {
  return (
    <SlotsContainer />
  );
}

export function setStyling() {
  const container = new Container();
  document.body.classList.remove(...document.body.classList);
  document.querySelector('header')?.classList.remove(...(document.querySelector('header').classList ?? []));
  container.set('Theme', WashingMachinesTheme);
  document.body.classList.add(container.get('Theme').getDecoratedClassName('root-layout'));
  document.querySelector('header')?.classList.add(container.get('Theme').getDecoratedClassName('header'));

  return null;
}

export default WashingMachinesPage;
