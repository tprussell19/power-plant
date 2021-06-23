// Plant-based functionality

export const changeState = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + val
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

export const seedling = { soil: 15, water: 15, light: 15};

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
// earthquake decrementer (zero soil, everything else normal)
// flood decrementer (max water, zero soil, normal light)

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
