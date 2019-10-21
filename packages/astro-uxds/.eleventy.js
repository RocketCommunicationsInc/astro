module.exports = function(eleventyConfig) {
  const markdownIt = require('markdown-it');
  const markdownItContainer = require('markdown-it-container');
  const implicitFigures = require('markdown-it-implicit-figures');
  const cleanCSS = require('clean-css');

  // markdown options
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(options)
    .use(implicitFigures, {
      figcaption: true,
    })
    .use(markdownItContainer, 'note')
    .use(markdownItContainer, 'caution')
    .use(markdownItContainer, 'col')
    .use(markdownItContainer, 'two-col')
    .use(markdownItContainer, 'three-col');
  eleventyConfig.setLibrary('md', markdownLib);

  /* Removes the h1 element from components to enabled inserting live sample */
  eleventyConfig.addNunjucksFilter('removeHeader', function(value) {
    value.val = value.val.replace(/<h1>(.*)<\/h1>/, '');
    return value;
  });

  // Manuall move static content
  eleventyConfig.addPassthroughCopy({ img: 'img/_site' });
  eleventyConfig.addPassthroughCopy({ '_content/img': 'img' });
  eleventyConfig.addPassthroughCopy({ '_content/**/*/img/*': 'components/img' });
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
