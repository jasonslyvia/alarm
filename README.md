alarm
=====

A Ghost theme, super fast & lightweight & minimal(no external framework, less than 20KB for whole page).

[Live Demo](http://undefinedblog.com)

##Preview

###Desktop
![Ghost theme alarm](http://ww1.sinaimg.cn/mw690/831e9385gw1efhumwo8zbj20vc0jhq6b.jpg)
![Ghost theme alarm](http://ww2.sinaimg.cn/mw690/831e9385gw1efhumxwlfsj20u50jbgoq.jpg)

###Mobile
![Ghost alarm](http://ww2.sinaimg.cn/mw690/831e9385gw1efhumxlxq6j20an0ixq4b.jpg)

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

##It's amazing, I want it!

First thing first, download this repo as a `.zip` file and extract it to your `Ghost` directory `/content/themes/alarm`.

Then customize what features you want to use.

 - No syntax highlighting? Remove `{{> syntaxHighlight}}` in `default.hbs`
 - No Disqus comment? Remove `{{> comment}}` in `post.hbs`
 - No Google Analytics? Remove `{{> ga}}` in `default.hbs`
 - No table of contents? Remove `{{> toc}}` in `default.hbs`

**If you want to use these features, modify it to suit your need in `themes/alarm/partials`, like changing `Google Analytics` code, `Disqus` code, etc.**

Have fun!

##TODO

 - [x] better css for `code`, `pre`, `footer` etc
 - [x] better input style in mobile platform
 - [ ] i18n support
