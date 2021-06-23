import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { fertilizer, starve, hydrate, superHydrate, dehydrate, shade, storeListState, changeListState, storeState, shineLight, feed, sunnyDay } from '../src/js/service-logic.js';

$(document).ready(function() {
  // natural disaster functions
  // setInterval(function() {}, 3000)
  
  const listControl = storeListState();

  $('#new-plant').click(function() {
    const stateControl = storeState();
    const addPlant = changeListState(stateControl);
    const newList = listControl(addPlant);
    $('#output').append(`
    <div class="container card">
      <h3 id='soil-value-${newList.length - 1}'>0</h3>
      <div class=btn-group>
        <button id='feed-${newList.length - 1}' class='feed btn btn-success m-2'>Feed</button>
        <button id='fertilize-${newList.length - 1}' class='fertilize btn btn-success m-2'>Fertilize</button>
      </div>
      <h3 id='hydrate-value-${newList.length - 1}'>0</h3>
      <div class='btn-group'>
        <button id='hydrate-${newList.length - 1}' class='hydrate btn btn-primary m-2'>Hydrate</button>
        <button id='superhydrate-${newList.length - 1}' class='superhydrate btn btn-info m-2'>Superhydrate</button>
      </div>
      <h3 id='light-value-${newList.length - 1}'>0</h3>
      <div class='btn-group'>
        <button id='shine-light-${newList.length - 1}' class='shine-light btn btn-warning m-2'>Shine Light</button>
        <button id='sunny-day-${newList.length - 1}' class='sunny-day btn btn-warning m-2'>Sunny Day</button>
      </div>
    </div>
    `);
    setInterval(function() {
      const id = newList.length - 1;
      const stateControl = listControl()[id];
      const newState = stateControl(starve);
      $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
      // if conditional handling zero case
    },
    2000);
    setInterval(function() {
      const id = newList.length - 1;
      const stateControl = listControl()[id];
      const newState = stateControl(dehydrate);
      $(`#hydrate-value-${id}`).text(`Water: ${newState.water}`);
    },
    2000);
    setInterval(function() {
      const id = newList.length - 1;
      const stateControl = listControl()[id];
      const newState = stateControl(shade);
      $(`#light-value-${id}`).text(`Light: ${newState.light}`);
    },
    2000);
  });

  // feed button event listener
  $('body').on('click', '.feed', function() {
    const id = parseInt(this.id.slice(5));
    const stateControl = listControl()[id];
    const newState = stateControl(feed);
    $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
  });

  // fertilizer button event listener
  $('body').on('click', '.fertilize', function() {
    const id = parseInt(this.id.slice(10));
    const stateControl = listControl()[id];
    const newState = stateControl(fertilizer);
    $(`#soil-value-${id}`).text(`Soil: ${newState.soil}`);
  });

  // hydrate button event listener
  $('body').on('click', '.hydrate', function() {
    const id = parseInt(this.id.slice(8));
    const stateControl = listControl()[id];
    const newState = stateControl(hydrate);
    $(`#hydrate-value-${id}`).text(`Water: ${newState.water}`);
  });

  // superHydrate button event listener
  $('body').on('click', '.superhydrate', function() {
    const id = parseInt(this.id.slice(13));
    const stateControl = listControl()[id];
    const newState = stateControl(superHydrate);
    $(`#hydrate-value-${id}`).text(`Water: ${newState.water}`);
  });

  // shineLight button event listener
  $('body').on('click', '.shine-light', function() {
    const id = parseInt(this.id.slice(12));
    const stateControl = listControl()[id];
    const newState = stateControl(shineLight);
    $(`#light-value-${id}`).text(`Light: ${newState.light}`);
  });

  // sunnyDay button event listener
  $('body').on('click', '.sunny-day', function() {
    const id = parseInt(this.id.slice(10));
    const stateControl = listControl()[id];
    const newState = stateControl(sunnyDay);
    $(`#light-value-${id}`).text(`Light: ${newState.light}`);
  });

  $('.show-state').click(function() {
    const id = parseInt(this.id.slice(8));
    const stateControl = listControl()[id];
    const currentState = stateControl();
    $(`#soil-value-${id}`).text(`Soil: ${currentState.soil}`);
  });
});


// add a decrementer to make plants need more food
// setInterval for decrementing water, soil, and light (decrement by small amounts but very quickly)
// setInterval for natural disasters like tornados, supernovas, earthquakes (happen once but nearly kill plants)
// if statement that kills plants upon reaching a certain value


// should we have an upper limit?
// what is death? too much or too little of the things that plants need
// if too much: if any one prop > 90 for more than 8 seconds = death
// if too little: if any two props = 0 for more than 8 seconds = death