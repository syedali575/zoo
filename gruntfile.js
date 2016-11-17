module.exports = function(grunt){
  "use strict";

  grunt.initConfig({

    clean: ["build/"],

    jshint:{
      option:{
        jshintrc:".jshintrc",
        ignore:["node_modules/**"]
      },
      source:{
        files:{
          src: ["src/js/**/*.js"]
        }
      }
    },

    sass:{
      allstyles:{
        files:[
          {
            expand: true,
            cwd: "src",
            src:["index.html"],
            dest: "build/"
          }
        ]
      }
    },

    copy:{
      html:{
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["index.html"],
            dest: "build"
          }
        ]
      }
    },

    vendorjs: {
      files: [
        {
          expand: true,
          cwd: "node_modules/jquery//dist/",
          src: ["jquery.js"],
          dest: "build/js"
        }
      ]
    },

    concat:{
      js:{
        src: ["src/js/**/*.js"],
        dest: "build/js/app.js"
      }
    },

    connect: {
      testing:{
        options: {
          port: 8888,
          base: "."
        }
      }
    },

    mocha: {
      all: {
        options: {
          urls: [
            "http://localhost:8888/test/thoughter.html"
          ]
        }
      }
    }



  });

grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-sass");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-contrib-clean");
grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.loadNpmTasks("grunt-mocha");



grunt.registerTask("default", ["clean","jshint","copy","concat","connect","mocha","sass"]);

};
