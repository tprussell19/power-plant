import { hydrate } from '../src/main.js';
import { feed } from '../src/main.js';
import { giveLight } from '../src/main.js';

describe ('hydrate', () => {

  test('it should increment prop water by one', () => {
    let plant = {};
    plant = hydrate(plant);
    expect(plant.water).toEqual(1);
  });
})

describe ('feed', () => {

  test('it should increment soil by one', () => {
    let plant = {};
    plant = feed(plant);
    expect(plant.soil).toEqual(1);
  });
})

describe ('giveLight', () => {

  test('it should increment light by one', () => {
    let plant = {};
    plant = giveLight(plant);
    expect(plant.light).toEqual(1);
  });
})