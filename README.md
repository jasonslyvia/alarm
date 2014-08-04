alarm
=====

A Ghost theme, super fast & lightweight & minimal(no external framework, less than 20KB for whole page).

**NOW IT'S COMPLETELY CUSTOMIZABLE!! Check it out!**

[Live Demo](http://undefinedblog.com/introducing-the-simple-fast-powerful-ghost-theme-alarm/)

##Preview

###Desktop
![Ghost theme alarm](https://github.com/jasonslyvia/alarm/raw/master/screenshot/desktop.png)

###Mobile
![Ghost theme alarm](https://github.com/jasonslyvia/alarm/raw/master/screenshot/mobile.png)

##Features

 - Super fast, less than 20KB, loaded in less than 1 sec
 - Lightweight, no flat design, no realism design, just a blog
 - Responsive, working on both desktop & mobile phone
 - Google search included
 - Disqus comment included(optional)
 - Google Analytics included(optional)
 - Syntax highlighting included(optional)
 - Table of content included(optional)
 - Legacy browser support(IE 8, note `syntax highlight` and `table of content` might not work)
 - **Customizable with Grunt, define your own nav menu and what features you want**

##It's amazing, I want it!

First thing first, get a copy of this repo to your computer by clicking the `Download ZIP` button on the right or run `git clone https://github.com/jasonslyvia/alarm.git` command.

###Configuration

Then customize what features you want to use. Open `Gruntfile.js` with your favourite editor. Pay attention to the `alarm` part. All settings are commented so just modifiy them to suit your need.

```javascript
...
grunt.initConfig({
    alarm: {
      //make sure i18n/your_locale.json exists
      locale: 'zh_CN',

      //set the nav menu as desired
      nav: [{
        url: '/',
        title: 'Blog'
      },{
        url: '/works/',
        title: 'Works'
      },{
        url: '/about/',
        title: 'About'
      }],

      //there is a automatically generated nav item when user viewing
      //single article or static page, config it's title
      navContentTitle: 'Content',

      disqus: {
        enable: true,
        shortname: 'your_disqus_id_here'  //http://your_disqus_id_here.disqus.com should be your admin panel
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
    }
...
```

###Build the theme

If you don't have `node` and `npm` installed, get them at [nodejs.org](http://nodejs.org). Then inside the `alarm` directory, run `npm install`, then run `grunt dist`.

Finally, the `dist` directory contained in `alarm` is your final ready-to-use theme, copy `dist` to your Ghost directory `/path-to-ghost/content/themes`, then rename it to `alarm`.

Restart your Ghost process and switch your theme to `alarm`.

Have fun!

##TODO

 - [x] better css for `code`, `pre`, `footer` etc
 - [x] better input style in mobile platform
 - [x] i18n support
