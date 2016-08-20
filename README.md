# livereload demo project

A demo project shows how to use the built-in livereload functionality of [`grunt-contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch) plugin for Grunt.

1. Install npm packages.

```sh
npm install 
```

2. Start livereload service.

```sh
grunt watch:livereload
```

3. Start express web server.

```sh
npm start
```

4. Lauch [http://localhost:3000/](http://localhost:3000/) in your web browser.
5. Go to file `index.jade` and change its content. Then switch to the browser and see if the webpage reloads automatically.
