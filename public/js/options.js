'use strict';
/* global $ tripModule attractionsModule hotels restaurants activities */

/**
 * This module fills the `select` tags with `option`s.
 * It runs immediately upon document ready (not called by other modules).
 * Each `option` displays the name of an attraction and is has a value of
 * that attraction's id. Selecting an option looks up the attraction by id,
 * then tells the trip module to add the attraction.
 */

$(function(){


$.get('/api/hotels')
.then(function (hotels) {
  hotels.forEach(function(hotel){
    $('#hotel-choices').append('<option>'+ hotel.name+' </option>');
  });
})
.catch( console.error.bind(console));


$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    $('#restaurant-choices').append('<option>'+ restaurant.name+' </option>');
  });
})
.catch( console.error.bind(console));


$.get('/api/activities')
.then(function (activities) {
  activities.forEach(function(activity){
    $('#activity-choices').append('<option>'+ activity.name+' </option>');
  });
})
.catch( console.error.bind(console));


  // // jQuery selects
  // var $optionsPanel = $('#options-panel');
  // var $hotelSelect = $optionsPanel.find('#hotel-choices');
  // var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
  // var $activitySelect = $optionsPanel.find('#activity-choices');

  // // make all the option tags (second arg of `forEach` is a `this` binding)
  // hotels.forEach(makeOption, $hotelSelect);
  // restaurants.forEach(makeOption, $restaurantSelect);
  // activities.forEach(makeOption, $activitySelect);

  // function makeOption (databaseAttraction) {
  //   var $option = $('<option></option>') // makes a new option tag
  //     .text(databaseAttraction.name)
  //     .val(databaseAttraction.id);
  //   this.append($option); // add the option to the specific select
  // }

  // what to do when the `+` button next to a `select` is clicked
  $optionsPanel.on('click', 'button[data-action="add"]', function () {
    var $select = $(this).siblings('select');
    var type = $select.data('type'); // from HTML data-type attribute
    var id = $select.find(':selected').val();
    // get associated attraction and add it to the current day in the trip
    var attraction = attractionsModule.getByTypeAndId(type, id);
    tripModule.addToCurrent(attraction);
  });

});
