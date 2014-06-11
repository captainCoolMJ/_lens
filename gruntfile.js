module.exports = function (grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'js/**.js'
      ],
      options: {
        globals: {
          console: true,
          browser: true,
          strict: true,
          eqeqeq: true,
          curly: true,
          eqnull: false,
          loopfunc: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};