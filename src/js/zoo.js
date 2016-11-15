(function() {
  'use strict';

console.log("I am in zoo");


function Animal(name, dob){
  this.name = name || "Fish";
  this.dob = dob;
}

console.log(new Animal("jack", 385621200000));




// Animal.prototype.sayHello = function sayHello(){
//   console.log("Hi my name is" + this.species);
// };
//
// sayHello();










}());
