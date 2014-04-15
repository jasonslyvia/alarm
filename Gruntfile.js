module.exports = function(grunt){
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
          build: {
            files: ['*.html' ,'css/*.css', 'js/*.js'],
            options: {
              livereload: true,
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch:build']);
};