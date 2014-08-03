module.exports = function(grunt){
    //project setting
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //configuration for Alarm the Ghost theme
        alarm: {
          //make sure i18n/your_locale.json exists
          locale: 'zh_CN',

          //set the nav menu as desired
          nav: [{
            url: '/',
            title: 'Home'
          },{
            url: '/works/',
            title: 'Works'
          },{
            url: '/about/',
            title: 'About Me'
          }],

          //there is a automatically generated nav item when user viewing
          //single article or static page, config it's title
          navContentTitle: 'Content',

          disqus: {
            enable: true,
            shortname: 'your_disqus_id_here'  //http://xxx.disqus.com should be vaild
          },

          googleAnalytics: {
            enable: true,
            id: 'your_GA_id_here'
          },

          syntaxHighlight: {
            enable: true
          },

          tableOfContent: {
            enable: true
          }
        },

        //implement the i18n feature using text replace
        replace: {
          dist: {
            src: ['dist/**/*.hbs', 'dist/assets/css/style.css'],
            overwrite: true,
            replacements: []
          }
        },

        concat: {
          dist: {
            dest: 'dist/assets/css/main.css'
          }
        },

        copy: {
          dist: {
            expand: true,
            cwd: 'src/',
            src: '**',
            dest: 'dist/'
          }
        },

        watch: {
          build: {
            files: ['*.html' ,'css/*.css', 'js/*.js'],
            options: {
              livereload: true,
            }
          }
        },

        cssmin: {
          dist: {
            files: {
              'dist/assets/css/main.min.css': ['dist/assets/css/main.css']
            }
          }
        },

        clean:{
          dist:{
            src: 'dist'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('dist', 'distribute the theme', function(){
      var options = grunt.config.get('alarm');
      var locale = options.locale || 'en_US';

      var i18n = 'i18n/' + locale + '.json';
      var localeObj = grunt.file.readJSON(i18n);
      if (!localeObj) {
        grunt.log.error("Can't find locale json file: " + i18n);
        return false;
      }

      //remove previous dist
      grunt.task.run('clean');
      //copy src to dist then run tasks in it
      grunt.task.run('copy:dist');


      //i18n it is
      var replacements = localeObj.filter(function(v, i){
        if (v.from && v.to) {
          return true;
        }
      });
      grunt.log.subhead('building with locale ' + locale);


      //config disqus
      var disqus = [];
      if (options.disqus.enable) {
        grunt.log.oklns("Disqus enabled");
        disqus = [
        {
          from: "ALARM_DISQUS_ENABLE",
          to: "{{> comment}}"
        },
        {
          from: "ALARM_DISQUS_SHORTNAME",
          to: options.disqus.shortname
        }];
      }
      else{
        disqus = [{from: "ALARM_DISQUS_ENABLE", to: ""}];
      }
      replacements = replacements.concat(disqus);


      //config google analytics
      var ga = [];
      if (options.googleAnalytics.enable) {
        ga = [
        {
          from: "ALARM_GA_ENABLE",
          to: "{{> ga}}"
        },
        {
          from: "ALARM_GA_ID",
          to: options.googleAnalytics.id
        }];
      grunt.log.oklns("Google analytics enabled");
      }
      else{
        ga = [{from: "ALARM_GA_ENABLE", to: ""}];
      }
      replacements = replacements.concat(ga);



      //config syntax highlight
      var sh = [];
      if (options.syntaxHighlight.enable) {
        grunt.log.oklns("Syntax highlighting enabled");
        sh = [{from: "ALARM_SH_ENABLE", to: "{{> syntaxHighlight}}"}];
      }
      else{
        sh = [{from: "ALARM_SH_ENABLE", to: ""}];
      }
      replacements = replacements.concat(sh);



      //config table of content
      var toc = [];
      if (options.tableOfContent.enable) {
        grunt.log.oklns("Table of content enabled");
        toc = [{from: "ALARM_TOC_ENABLE", to: "{{> toc}}"}];
      }
      else{
        toc = [{from: "ALARM_TOC_ENABLE", to: ""}];
      }
      replacements = replacements.concat(toc);


      //nav menu
      var navItemWidth = (100 / options.nav.length).toFixed(4) + '%';
      replacements = replacements.concat([
        {from: "ALARM_NAV_WIDTH", to: navItemWidth},
        {from: "ALARM_NAV_CONTENT", to: options.navContentTitle}
      ]);

      var navHTML = '<ul class="nav">';
      options.nav.forEach(function(v){
        navHTML += '<li><a href="' + v.url + '">' + v.title + '</a>';
      });
      navHTML += '</ul>';
      replacements = replacements.concat([{from: "ALARM_NAV_HTML", to: navHTML}]);


      grunt.config.set('replace.dist.replacements', replacements);
      grunt.task.run('replace');

      //concat css
      var cssSrc = ['dist/assets/css/*.css'];
      if (!options.syntaxHighlight.enable) {
        cssSrc.concat(['!dist/assets/css/monokai_sublime.css']);
      }
      grunt.config.set('concat.dist.src', cssSrc);
      grunt.task.run('concat');
      grunt.task.run('cssmin');

      grunt.log.oklns("Now enjoy your new Ghost theme --- Alarm");
      grunt.log.writeln("copy dist directory to Ghost/content/themes and rename it to alarm, then restart Ghost to make it take effect.");

    });
};