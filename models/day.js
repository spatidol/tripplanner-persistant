var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel.js');
var Restaurant = require('./restaurant.js');
var Activity = require('./activity.js');

var Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
  }

}, {
  getterMethods: {
    type: function () {
      return 'day'
    }
  }
});

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'});



module.exports = Day;
