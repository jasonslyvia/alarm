alarm
=====

A Ghost theme, super fast & lightweight & minimal(no external framework, less than 20k for whole page).

[Preview](http://undefinedblog.com)

##Features

 - Super fast, less than 20k, loaded in less than 1 sec
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

 - No syntax highlighting? Remove `{{> syntaxHighlight}} in `default.hbs`
 - No Disqus comment? Remove `{{> comment}}` in `post.hbs`
 - No google analytics? Remove `{{> ga}}` in `default.hbs`
 - No table of contents? Remove `{{> toc}}` in `default.hbs`

**If you want to use these features, modify it to suit your need in `themes/alarm/partials`, like changing `Google Analytics` code, `Disqus` code, etc.**

Last thing you should take care about, modify `line 60` in `default.hbs`, replace ` site:undefinedblog.com` with your own blog url to make it work with Google search.

Have fun!

##TODO

 - [*] better css for `code`, `pre`, `footer` etc
 - [*] better input style in mobile platform
 - [ ] International support