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

export const changeState = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + val
    });
  };
};

export const storeState = () => {
  let currentState = {};
  return (changeStateFunction = state => state) => {
    const newState = changeStateFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateControl = storeState();

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);