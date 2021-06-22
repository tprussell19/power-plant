// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

export const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

export const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

export const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  }
};

export const changePlantState = (plant, prop) => {
  return {
    ...plant,
    [prop]: (plant[prop] || 0) + 1
  }
}

export const changeState = (prop) => {
  return (val) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + val
    })
  }
}

export const storeState = () => {
  let currentState = {};
  return (changeStateFunction) => {
    const newState = changeStateFunction(currentState);
    // currentState = { ...newState };
    // return newState;
    return currentState = { soil: 1 };
  }
}

export const stateControl = storeState();