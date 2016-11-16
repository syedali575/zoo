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


      it("Should throw an error message if name argument is not passed in string format", function(){
        try {
          new window.zoo.Animal([1,2,3], "Jan 1 1998");
        }
        catch(err) {
          expect(err).to.be.an.instanceof(TypeError);
        }
      });


      it("Should throw an error message if name is not provided", function(){
        try{
          new window.zoo.Animal();
        }
        catch(err){
          expect(err).to.be.an.instanceof(TypeError);
        }
      });


    });






  });
  //End of iife
}());
