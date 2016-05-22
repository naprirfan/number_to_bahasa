module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/num_to_bahasa.js',
        dest: 'dist/ntb.min.js'
      }
    },
    watch: {
      js : {
        files: ['src/*.js'],
        tasks: ['uglify']  
      }
    }
  });

  // Load the plugin that provides task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};