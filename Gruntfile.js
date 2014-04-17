module.exports = function(grunt){
    //project setting
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
          build: {
            files: ['*.html' ,'css/*.css', 'js/*.js'],
            options: {
              livereload: true,
            }
          }
        },

        concat: {
          distCss: {
            src: ['assets/css/*.css', '!assets/css/monokai_sublime.css'],
            dest: 'assets/css/main.css'
          }
        },

        cssmin: {
          dist: {
            files: {
              'assets/css/main.min.css': ['assets/css/main.css']
            }
          }
        },

        clean:{
          dist:{
            src: ['assets/css/main.css', 'assets/css/main.min.css']
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch:build']);
    grunt.registerTask('dist', ['clean', 'concat:distCss', 'cssmin']);
};