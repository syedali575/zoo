(function() {
  'use strict';
  window.zoo = window.zoo || {};
  window.zoo.Animal = Animal;
  window.zoo.ArcticFox= ArcticFox;
  window.zoo.PolarBear = PolarBear;


  // console.log("I am in zoo");

  /**
  * This constructor function create a new animal
  * @param {name} name Name of the animal
  * @param {dob} dob  date of birth of the animal
  * @throws {TypeError} if name is anything but a string
  * @throws {TypeError} if no name is provided
  */
  function Animal(name, dob){
    if (typeof(name) !== "string"){
      throw new TypeError("You must provide name argument in string format");
    }
    else if (name === undefined) {
      throw new TypeError("You must provide name and it must be in string format");
    }
    this.name = name || "Jimmy";
    this.dob = dob || "April 13, 1937";
  }
  Animal.prototype.getAge = function getAge(){
    return 5;
  };




  /**
   * Constructor Function to create a Polar Bear which is species of Animal
   * @param {Name} name name to the new Polar Bear
   * @param {dob} dob  dob of the new Polar Bear
   *
   */
  function PolarBear(name, dob) {
    if (typeof(name) !== "string"){
      throw new TypeError("You must provide name argument in string format");
    }
    else if (name === undefined) {
      throw new TypeError("You must provide name and it must be in string format");
    }
    Animal.apply( this, [name, dob] );
  }
  PolarBear.prototype = Object.create(Animal.prototype);
  PolarBear.prototype.constructor = PolarBear;
  PolarBear.prototype.species = "Polar Bear";

  var swimmer = new PolarBear("Matt", "Jan 1, 2014");

  // Method to calculate distance traveled by swimmer Polar Bear
  PolarBear.prototype.getDistance = function getDistance(duration){
    var speed = 5;
    return duration * speed;
  };

  console.log("Distance traveled", swimmer.getDistance(5));



  // Constructor Function to create a Arctic Fox which is species of Animal
  function ArcticFox(name, dob) {
    // Apply Animak function on "Arctic Fox", so it has Animal attributes;
    Animal.apply( this, [name, dob] );
  }
  // these two lines connect Arctic Fox to Animal
  ArcticFox.prototype = Object.create(Animal.prototype);
  ArcticFox.prototype.constructor = ArcticFox;
  ArcticFox.prototype.species = "Arctic Fox";



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
