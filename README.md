# fernandotrujano.com
Personal Site. 

This site uses handlebars for templating and grunt for easy building and deployment. Updating the site is as easy as modifying `src/data.json` followed by `grunt deploy`. 

Running `grunt` will build the site and watch for changes, allowing you to develop as usual without needing to rebuild. 

When you are ready to deploy run `grunt deploy` which will minify javascript, compile scss/templates and push the changes to `gh-pages` (updating the site). 

Getting Started: 

```
bower install
npm install
grunt deploy
```
