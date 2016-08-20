module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
        files: ['public/stylesheets/**/*.css', 'public/javascripts/**/*.js', 'views/**/*.jade'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
}