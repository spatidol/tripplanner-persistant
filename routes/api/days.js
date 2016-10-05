var express = require('express');
var router = express.Router();
var hotels = require('../../models/hotel.js');
var restaurants = require('../../models/restaurant.js');
var activities = require('../../models/activity.js');
var day = require('../../models/day.js');

var allthedays = [];

router.get('/api/days', function(req, res, next) {
   res.json(allthedays);
})

router.get('/api/days/:id', function(req, res, next){

})


router.get('/api/days/:id/hotel', function(req, res, next){

})

router.get('/api/days/:id/restaurant', function(req, res, next){

})

router.get('/api/days/:id/activity', function(req, res, next){

})

///posts

router.post('/api/days', function(req, res, next){
  day.create()
  .then(function(newday){
    allthedays.push(newday);
    return res.json(newday);
  })
})

router.post('/api/days/:id/hotel', function(req, res, next){

})

router.post('/api/days/:id/restaurant', function(req, res, next){

})

router.post('/api/days/:id/activity', function(req, res, next){

})

//delete

router.delete('/api/days/:id', function(req, res, next){
  allthedays = [];
})

router.delete('/api/days/:id/hotel', function(req, res, next){

})

router.delete('/api/days/:id/restaurant', function(req, res, next){

})

router.delete('/api/days/:id/activity', function(req, res, next){

})

module.exports = router;
