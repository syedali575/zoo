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

      // // console.log(new window.zoo.Animal());
      // it("Should create a default animal if no argument has been passed", function(){
      //   var empty = new window.zoo.Animal();
      //   console.log(empty);
      //   expect(empty).to.be.an("Object");
      //   // expect("Object").to.be.an(Animal);
      //
      // });

      // console.log(new window.zoo.Animal([1,2,3], "Jan 1 1920"));

      it("Should throw an error message if name argument is not passed in string format", function(){
        try {
          new window.zoo.Animal([1,2,3], "Jan 1 1998");
        }
        catch(err) {
          expect(err).to.be.an.instanceof(TypeError);
        }
        // expect(new window.zoo.Animal([1,2,3], "Jan 1 1920")).to.be.an(TypeError);
      });


    });






  });
  //End of iife
}());
