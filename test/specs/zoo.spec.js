(function() {
  'use strict';
  window.zoo = window.zoo || {};

  var expect = chai.expect;



  describe("Testing Functions of Zoo ", function(){
    it("confirming namespace window.zoo exist", function(){
      expect(window.zoo).to.be.a("object");
    });

    describe("Testing Animal Method", function(){
      it("Should create a new animal when name and dob is passed as an argument", function(){
        expect(new window.zoo.Animal("Jiggy", "Jan 1, 2010")).to.be.an("Object");
      });
    });






  });
  //End of iife
}());
