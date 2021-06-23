import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { blueFood, stateControl, superHydrate, storeListState, changeListState, storeState } from '../src/js/service-logic.js';

// instantiate new plants
// const plant1 = stateControl;
// const plant2 = stateControl;
// const plant3 = stateControl;

$(document).ready(function() {
  
  const listControl = storeListState();

  $('#new-plant').click(function() {
    const stateControl = storeState();
    const addPlant = changeListState(stateControl);
    const newList = listControl(addPlant);
    $('#output').append(`
    <div>
      <p id='soil-value-${newList.length -1}'>0</p>
      <button id='feed-${newList.length -1}' class='feed'>Feed</button>
    </div>
    `);
  });

  $('body').on('click', '.feed', function() {
    // console.log('.feed').attr(id);
    const id = parseInt(this.id.slice(5));
    const stateControl = listControl()[id];
    const newState = stateControl(blueFood);
    $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
  });

  $('.show-state').click(function() {
    const id = parseInt(this.id.slice(5));
    const stateControl = listControl()[id];
    const currentState = stateControl();
    $(`#soil-value-${id}`).text(`Soil: ${currentState.soil}`);
  });
});