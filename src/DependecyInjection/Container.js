import WashingMachinesTheme from '../Themes/WashingMachinesTheme';

const data = {
  Theme: WashingMachinesTheme
};

class Container {
  has(key) {
    return data[key] !== undefined;
  }

  get(key) {
    return new data[key]();
  }

  set(key, constructor) {
    data[key] = constructor;
  }
}

export default Container;
