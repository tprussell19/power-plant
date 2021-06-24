// Plant-based functionality

export const changeState = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + val
    });
  };
};

export const changeTwoStates = (prop, prop2) => {
  return (val, val2) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + val,
      [prop2]: (state[prop2] || 0) + val2
    });
  };
};

export const storeState = (initialState) => {
  let currentState = initialState;
  return (changeStateFunction = state => state) => {
    const newState = changeStateFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateControl = storeState();

// initial states

export const seedling = { soil: 15, water: 15, light: 15, growth: 0 };

// plant input functions

export const feed = changeState("soil")(1);
export const fertilizer = changeState("soil")(5);
export const starve = changeState("soil")(-1);

export const hydrate = changeState("water")(1);
export const superHydrate = changeState("water")(5);
export const dehydrate = changeState("water")(-1);

export const shineLight = changeState("light")(1);
export const sunnyDay = changeState("light")(5);
export const shade = changeState("light")(-1);

// natural disaster functions

// supernova decrementer (max light, everything else 0)
export const supernova = changeState("light")(30);

// earthquake decrementer (zero soil, everything else normal)
export const earthquake = changeState("soil")(-30);

// flood decrementer (max water, zero soil, normal light)
export const deluge = changeTwoStates("soil", "water")(-30, 20);

// growth functions
export const growth = changeState("growth")(1);

// List-based functionality

export const storeListState = () => {
  let currentState = [];
  return (changeStateFunction = state => state) => {
    const newState = changeStateFunction(currentState);
    currentState = [...newState];
    return newState;
  };
};

export const changeListState = (plant) => {
  return (state) => ([
    ...state,
    plant
  ]);
};

// Outdated functionality

// export const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// export const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// export const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// export const changePlantState = (plant, prop) => {
//   return {
//     ...plant,
//     [prop]: (plant[prop] || 0) + 1
//   }
// }
