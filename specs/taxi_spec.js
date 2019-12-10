const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function(){
  let taxi;
//this is just like ruby setup
  beforeEach(function(){
    taxi = new Taxi("Toyota", "Prius", "Bob")
  })
//test 1
it('should have a manufacture', function(){
// Arrange: create a new taxi object
//Act. get the manfacturere property from interval
const actual = taxi.manufacturer;
// Assert: Assert that the manufacturer is Toyota
assert.strictEqual(actual, "Toyota")
});

//test 2
it('should have a model', function(){
// Arrange: create a new taxi object
// with and manufacturer and model
// get the model from the object
const actual = taxi.model;
//assert that the model is Yaris
assert.strictEqual(actual, "Prius")
});

it('should have a driver', function (){
//get the driver from the object
  const actual = taxi.driver;
  assert.strictEqual(actual, "Bob")
});


});
