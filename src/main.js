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
  }
}