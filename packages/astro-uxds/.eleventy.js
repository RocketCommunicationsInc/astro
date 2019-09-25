module.exports = function(eleventyConfig) {
  const markdownIt = require('markdown-it');
  const markdownItContainer = require('markdown-it-container');
  const markdownItAttrs = require('markdown-it-attrs');
  const cleanCSS = require('clean-css');

  // markdown options
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(options)
    .use(markdownItContainer, 'note')
    .use(markdownItContainer, 'caution')
    .use(markdownItAttrs);
  eleventyConfig.setLibrary('md', markdownLib);

  // Manuall move static content
  eleventyConfig.addPassthroughCopy({ img: 'img/_site' });
  eleventyConfig.addPassthroughCopy({ '_content/img': 'img' });
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('fonts');

  // You can return your Config object (optional).
  return {
    dir: {
      input: '_content',
      data: './_data',
      includes: '../_includes',
    },
  };
};
