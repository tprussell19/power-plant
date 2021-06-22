import { hydrate } from '../src/js/service-logic.js';
import { feed } from '../src/js/service-logic.js';
import { giveLight } from '../src/js/service-logic.js';
import { changePlantState } from '../src/js/service-logic.js';
import { changeState } from '../src/js/service-logic.js';
import { storeState } from '../src/js/service-logic.js';
import { stateControl } from '../src/js/service-logic.js';

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

describe('changePlantState', () => {
  
  test('it should increment by one the state of any given prop', () => {
    let plant = {};
    plant = changePlantState(plant, "soil");
    expect(plant.soil).toEqual(1)
  });
})

describe('changeState', () => {
  let plant = {};

  test('it should increment a property by one on any object', () => {
    plant = changeState("light")(1)(plant);
    expect(plant.light).toEqual(1)
  }),

  test('it should change the value of a property of any object', () => {
    plant = changeState("fertilizer")(50)(plant);
    expect(plant.fertilizer).toEqual(50)
  })
})

describe('stateControl', () => {
  const blueFood = changeState("soil")(5);
  
  test('it increments any object with prop soil by 5', () => {
    const fedPlant = stateControl(blueFood);
    expect(fedPlant.soil).toEqual(5);
  })

  test('it reads the state', () => {
    expect(stateControl()).toEqual({soil: 5});
  })
})