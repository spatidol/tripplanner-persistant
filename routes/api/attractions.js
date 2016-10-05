var express = require('express');
var router = express.Router();
var hotels = require('../../models/hotel.js');
var restaurants = require('../../models/restaurant.js');
var activities = require('../../models/activity.js');

var hotel, restaurant, activity;

router.get('/api/hotels', function(req, res, next) {
  hotel= hotels.findAll()
  .then(function(hotels){
    res.json(hotels)
  })
  .catch(next)
})

router.get('/api/restaurants', function(req, res, next) {
  restaurant= restaurants.findAll()
  .then(function(restaurants){
    res.json(restaurants)
  })
  .catch(next)
})

router.get('/api/activities', function(req, res, next) {
  activity= activities.findAll()
  .then(function(activities){
    res.json(activities)
  })
  .catch(next)
})

module.exports = router;
