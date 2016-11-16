(function() {
  'use strict';

  console.log("I am in zoo");

  // Constructor function to create an Animal
  function Animal(name, dob){
    this.name = name || "Jimmy";
    this.dob = dob || 20;
  }
  Animal.prototype.getAge = function getAge(){
    return 5;
  };


  // Constructor Function to create a Polar Bear which is species of Animal
  function PolarBear(name, dob) {
    Animal.apply( this, [name, dob] );
    this.species = "Polar Bear";
  }
  PolarBear.prototype = Object.create(Animal.prototype);
  PolarBear.prototype.constructor = PolarBear;

  var swimmer = new PolarBear("Matt", "Jan 1, 2014");

  // Method to calculate distance traveled by swimmer Polar Bear
  PolarBear.prototype.getDistance = function getDistance(duration){
    var speed = 5;
    return duration * speed;
  };

  console.log("Distance traveled", swimmer.getDistance(5));



  // Constructor Function to create a Arctic Fox which is species of Animal
  function ArcticFox(name, dob) {
    Animal.apply( this, [name, dob] );
    this.species = "Arctic Fox";
  }
  ArcticFox.prototype = Object.create(Animal.prototype);
  ArcticFox.prototype.constructor = ArcticFox;



  var momFox = new ArcticFox("Jamie", "June 15, 2010");

  // Method to give birth for Arctic Fox
  ArcticFox.prototype.giveBirth = function giveBirth(){
    return new ArcticFox("Joey", "Nov 15, 2016");
  };

  console.log(momFox.giveBirth());


  var fastFox = new ArcticFox("Flash", "Jan 1, 2012");

  //Method to calculate running speed of Arctic Fox

  ArcticFox.prototype.getSpeed = function getSpeed(duration){
    var milesTraveled = 5;
    return milesTraveled / duration;
  };


  console.log("Speed per mile", fastFox.getSpeed(5));




}());
