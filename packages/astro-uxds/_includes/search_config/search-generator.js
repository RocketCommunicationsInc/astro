const markdownJson = require('markdown-json');
const settings = {
  "name": "markdown-json",
  "cwd": "./js/search_config/",
  "src": "../../_content/",
  "filePattern": "**/*.md",
  "ignore": "*(icon|input)*",
  "dist": "./_site/search-index.json",
  "server": false,
  "display": false,
  "port": "3001"
};

markdownJson(settings)
  .then((data) => {
    return data;
  }).catch((err) => {
    console.log('error:', err);
  })